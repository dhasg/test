const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alertBox.style.display = "none";
    alertBox.className = "form-alert";

    // Spam check (honeypot)
    if (document.getElementById("website").value !== "") {
        return; // silently block bots
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        showError("Please fill in all required fields.");
        return;
    }

    if (!validateEmail(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    // Simulate successful submission (backend comes later)
    showSuccess("Thank you! Your message has been sent successfully.");
    form.reset();
});

function showSuccess(msg) {
    alertBox.textContent = msg;
    alertBox.classList.add("success");
    alertBox.style.display = "block";
}

function showError(msg) {
    alertBox.textContent = msg;
    alertBox.classList.add("error");
    alertBox.style.display = "block";
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
