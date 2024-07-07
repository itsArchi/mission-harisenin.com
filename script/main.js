// SCRIPT UNTUK CAROUSEL
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

// function linkToyota() {
//     linkTo("https://toyota.co.id/");
// }

// function linkDaihatsu() {
//     linkTo("https://daihatsu.co.id/");
// }

// function linkHyundai() {
//     linkTo("https://hyundai.co.id/");
// }

// function linkMitsubishi() {
//     linkTo("https://mitsubishi.co.id/");
// }

// function linkSuzuki() {
//     linkTo("https://suzuki.co.id/");
// }

// function linkMazda() {
//     linkTo("https://mazda.co.id/");
// }

// function linkChat() {
//     linkTo("#fourthParallax");
// }

function goto(link) {
  const urls = {
    toyota: "https://toyota.astra.co.id/",
    daihatsu: "https://daihatsu.co.id/",
    hyundai: "https://hyundai.com/",
    mitsubishi: "https://mitsubishi-motors.co.id/",
    suzuki: "https://suzuki.co.id/",
    mazda: "https://mazda.co.id/",
    find: "#thirdParallax", // untuk ke page 3 (pricing)
    chat: "#fourthParallax", // untuk ke page 4 (contact)
  };

  window.location.href = urls[link];
}

