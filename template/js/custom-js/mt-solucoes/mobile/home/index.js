const startSlickSliders = () => {
  $('.banner-triple .container > .row').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: false
  });
  $('.section-categories-banners .container > .row').slick({
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
}



export const startHomePage = () => {
  startSlickSliders();
}