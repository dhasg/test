document.addEventListener("DOMContentLoaded", () => {
    console.log("Asuogyaman Health Directorate website loaded");
});

let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);

const header = document.getElementById("mainHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-bar ul");

let lastScrollY = window.scrollY;

// Header height compensation
function updateHeaderHeight() {
    document.documentElement.style.setProperty(
        "--header-height",
        header.offsetHeight + "px"
    );
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);

// Scroll behavior
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 120) {
        header.classList.add("hide");
        navMenu.classList.remove("show");
    } else {
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

// Menu toggle
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


fetch("data/news.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("newsContainer");
        data.forEach(item => {
            container.innerHTML += `
                <article>
                    <h4>${item.title}</h4>
                    <small>${item.date}</small>
                    <p>${item.content}</p>
                </article>
            `;
        });
    });
