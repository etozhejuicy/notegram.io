const app = document.getElementById("app");

window.addEventListener("DOMContentLoaded", () => {
  if (!app) return;

  if (app) {
    console.log("Application has been executed!");

    const form = app?.querySelector("#generation");
    const inputs = form?.querySelectorAll("input");

    let instagram = form?.querySelector("#instagram").value;
    let twitter = form?.querySelector("#twitter").value;
    let vk = form?.querySelector("#vk").value;
    let telegram = form?.querySelector("#telegram").value;

    let profile = app?.querySelector('#profile');

    let data = {
      instagram: instagram || null,
      twitter: twitter || null,
      telegram: telegram || null,
      vk: vk || null,
    };

    profile.style.display = 'none';

    // update data's
    inputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        switch (e.currentTarget.id) {
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
          case "telegram":
            data.telegram = e.currentTarget.value;
            console.log(data);
            break;
        }

        if(data.instagram === null && data.vk === null && data.twitter === null && data.telegram === null) {
            profile.style.display = 'none';
        } else {
            profile.style.display = 'block';

            profile.innerHTML = `
            ${data.instagram ? `instagram: ${data.instagram}` : ''}
            ${data.twitter ? `twitter: ${data.twitter}` : ''}
            ${data.telegram ? `telegram: ${data.telegram}` : ''}
            ${data.vk ? `vk: ${data.vk}` : ''}
            `;
        }
      });
    });
  }
});
