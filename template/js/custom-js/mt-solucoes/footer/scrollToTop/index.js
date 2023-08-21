export const scrollToTop = () => {
  document.querySelector('.btn-to-top').addEventListener('click', ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};