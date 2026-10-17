// Text is kept in one dictionary so both languages are easy to review and edit.
const translations = {
  zh: {
    skip: "跳至正文", navAbout: "关于", navInterests: "当前关注", navContact: "联系",
    eyebrow: "设计 · 人 · 智能", greeting: "你好，我是",
    introStart: "我是一名", introEnd: "的设计学专业学生，关注物理世界与数字世界中，智能如何与人交互。",
    university: "上海交通大学", universityUrl: "https://baike.baidu.com/item/上海交通大学/131671",
    aboutAction: "关于我", contactAction: "联系我", aboutTitle: "关于我",
    question: "人工智能是工具，还是会和人类共生？",
    aboutBody: "带着这个问题，我从设计的视角，探索物理世界与数字世界中人与智能的关系。",
    interestsTitle: "当前关注", contactTitle: "保持联系。", contactBody: "欢迎通过邮件与我交流。",
    backTop: "回到顶部", navigation: "主导航",
    description: "Jiale Ma，上海交通大学设计学专业学生。探索物理世界与数字世界中人与智能的关系。"
  },
  en: {
    skip: "Skip to content", navAbout: "About", navInterests: "Current Interests", navContact: "Contact",
    eyebrow: "DESIGN · PEOPLE · INTELLIGENCE", greeting: "Hi, I’m",
    introStart: "I’m a design student at ", introEnd: ", exploring how people interact with intelligence across the physical and digital worlds.",
    university: "Shanghai Jiao Tong University", universityUrl: "https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University",
    aboutAction: "About me", contactAction: "Get in touch", aboutTitle: "About",
    question: "Is AI a tool, or will it coexist with humanity?",
    aboutBody: "This question guides my exploration of the relationship between people and intelligence across the physical and digital worlds, through the lens of design.",
    interestsTitle: "Current Interests", contactTitle: "Get in touch.", contactBody: "Feel free to reach out by email.",
    backTop: "Back to top", navigation: "Main navigation",
    description: "Jiale Ma, a design student at Shanghai Jiao Tong University, exploring the relationship between people and intelligence."
  }
};

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  const university = document.getElementById("university");
  university.textContent = copy.university;
  university.href = copy.universityUrl;
  document.getElementById("navigation").setAttribute("aria-label", copy.navigation);
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  // The switch still works when browser privacy settings disable local storage.
  try { localStorage.setItem("jiale-language", language); } catch { /* No persistence available. */ }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let initialLanguage = "zh";
try {
  const savedLanguage = localStorage.getItem("jiale-language");
  if (savedLanguage === "en") initialLanguage = "en";
} catch { /* Default to Chinese. */ }
setLanguage(initialLanguage);
