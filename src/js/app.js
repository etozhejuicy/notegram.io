const app = document.getElementById("app");

window.addEventListener("DOMContentLoaded", () => {
  if (!app) return;

  if (app) {
    console.log("Application has been executed!");

    const form = app?.querySelector("#generation");
    const inputs = form?.querySelectorAll("input");

    let facebook = form?.querySelector("#facebook").value;
    let email = form?.querySelector("#email").value;
    let github = form?.querySelector("#github").value;
    let instagram = form?.querySelector("#instagram").value;
    let twitter = form?.querySelector("#twitter").value;
    let telegram = form?.querySelector("#telegram").value;
    let whatsapp = form?.querySelector("#whatsapp").value;
    let vk = form?.querySelector("#vk").value;

    let profile = app?.querySelector("#profile");

    let data = {
      facebook: facebook || null,
      email: email || null,
      github: github || null,
      instagram: instagram || null,
      twitter: twitter || null,
      telegram: telegram || null,
      whatsapp: whatsapp || null,
      vk: vk || null,
    };

    profile.style.display = "none";

    // update data's
    inputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        switch (e.currentTarget.id) {
          case "facebook":
            data.facebook = e.currentTarget.value;
            console.log(data);
            break;
          case "github":
            data.github = e.currentTarget.value;
            console.log(data);
            break;
          case "email":
            data.email = e.currentTarget.value;
            console.log(data);
            break;
          case "instagram":
            data.instagram = e.currentTarget.value;
            console.log(data);
            break;
          case "vk":
            data.vk = e.currentTarget.value;
            console.log(data);
            break;
          case "twitter":
            data.twitter = e.currentTarget.value;
            console.log(data);
            break;
          case "whatsapp":
            data.whatsapp = e.currentTarget.value;
            console.log(data);
            break;
          case "telegram":
            data.telegram = e.currentTarget.value;
            console.log(data);
            break;
        }

        if (
          data.email === null &&
          data.facebook === null &&
          data.github === null &&
          data.instagram === null &&
          data.vk === null &&
          data.whatsapp === null &&
          data.twitter === null &&
          data.telegram === null
        ) {
          profile.style.display = "none";
        } else {
          profile.style.display = "block";

          profile.innerHTML = `
            ${data.email ? `email: ${data.email}` : ""}
            ${data.github ? `github: ${data.github}` : ""}
            ${data.whatsapp ? `whatsapp: ${data.whatsapp}` : ""}
            ${data.instagram ? `instagram: ${data.instagram}` : ""}
            ${data.facebook ? `facebook: ${data.facebook}` : ""}
            ${data.twitter ? `twitter: ${data.twitter}` : ""}
            ${data.telegram ? `telegram: ${data.telegram}` : ""}
            ${data.vk ? `vk: ${data.vk}` : ""}
            `;
        }
      });
    });
  }
});
