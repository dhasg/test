const translations = {
  en: {
    hero1_title: "Ensuring Access to Quality Healthcare for All",
    hero1_sub: "Asuogyaman District Health Directorate",
    news_title: "Latest News & Updates",
    facilities_title: "Health Facilities",
    ql_facilities: "Health Facilities",
    ql_nhis: "NHIS",
    ql_subdistricts: "Sub-Districts",
    ql_mch: "Maternal & Child Health"
  },

  tw: {
    hero1_title: "Yɛrehwɛ adwumapa adwumadi ama obiara",
    hero1_sub: "Asuogyaman Akwahosan Dwumadie",
    news_title: "Nkaeɛbɔ ne Nsɛm Foforɔ",
    facilities_title: "Akwahosan Adwumadi Bea",
    ql_facilities: "Akwahosan Adwumadi Bea",
    ql_nhis: "NHIS",
    ql_subdistricts: "Mantam Ketewadeɛ",
    ql_mch: "Maame ne Abɔfra Akwahosan"
  },

  ee: {
    hero1_title: "Míele dɔwɔwɔ kple akomam blibo ƒe akomam",
    hero1_sub: "Asuogyaman District Health Directorate",
    news_title: "Nyatakaka Kple Ɣeyiɖeɖe",
    facilities_title: "Aƒe siwo ƒe Akomam Wɔna",
    ql_facilities: "Aƒe siwo ƒe Akomam Wɔna",
    ql_nhis: "NHIS",
    ql_subdistricts: "Sub-Districts",
    ql_mch: "Dada kple Vi ƒe Akomam"
  },

  dg: {
    hero1_title: "Mɔ ni nyɛ kɛ hewalɛmi shishi nɛ he",
    hero1_sub: "Asuogyaman District Health Directorate",
    news_title: "He Nyɛlɛ Kɛ Nɔŋ",
    facilities_title: "Hewalɛmi Shishi Bɛmɔ",
    ql_facilities: "Hewalɛmi Shishi Bɛmɔ",
    ql_nhis: "NHIS",
    ql_subdistricts: "Sub-Districts",
    ql_mch: "Mɛ Yɔɔ kɛ Bi Aklɛ"
  }
};

document.getElementById("languageSwitcher").addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
