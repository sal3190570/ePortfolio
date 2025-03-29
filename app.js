function toggleSidebar() {
  document.querySelector("body").classList.toggle("open");
}

function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_6mi87zl
// service_26gyb3c
// _gx-0wSVcngelt_UL

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    // Loading state
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_26gyb3c",
      "template_flahmyv",
      event.target,
      "_gx-0wSVcngelt_UL"
    );

    //   Success state
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert(
      "an error has occured. Please try again later or contact me at salmanawal2012@gmail.com"
    );
  }
}
