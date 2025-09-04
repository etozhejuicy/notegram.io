const app = document.getElementById("app");

if (!app) {
  throw new Error("App container not found");
}

// Конфигурация поддерживаемых платформ
const platforms = {
  facebook: { name: "Facebook", url: "https://facebook.com/" },
  email: { name: "Email", url: "mailto:" },
  github: { name: "GitHub", url: "https://github.com/" },
  instagram: { name: "Instagram", url: "https://instagram.com/" },
  twitter: { name: "Twitter", url: "https://twitter.com/" },
  telegram: { name: "Telegram", url: "https://t.me/" },
  whatsapp: { name: "WhatsApp", url: "https://wa.me/" },
  vk: { name: "VK", url: "https://vk.com/" }
};

window.addEventListener("DOMContentLoaded", () => {
  const form = app.querySelector("#generation");
  const profile = app.querySelector("#profile");
  const data = {};

  // Инициализация данных
  Object.keys(platforms).forEach(platform => {
    const input = form.querySelector(`#${platform}`);
    if (input) {
      data[platform] = input.value.trim() || null;
    }
  });

  profile.style.display = "none";

  // Функция обновления профиля
  const updateProfile = () => {
    profile.innerHTML = "";
    let hasContent = false;

    Object.entries(data).forEach(([platform, value]) => {
      if (value) {
        hasContent = true;
        const link = document.createElement("a");
        link.href = platforms[platform].url + value;
        link.textContent = platforms[platform].name;
        link.target = "_blank";
        link.classList.add("profile-link");
        profile.appendChild(link);
      }
    });

    profile.style.display = hasContent ? "block" : "none";
  };

  // Обработчик событий
  form.addEventListener("input", (e) => {
    if (!e.target.matches("input")) return;

    const platform = e.target.id;
    if (platforms[platform]) {
      data[platform] = e.target.value.trim() || null;
      updateProfile();
    }
  });

  // Первоначальное обновление
  updateProfile();
});