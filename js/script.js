$(() => {
  $('.new-card').slice(0,4).show()
  $('.load-more').click(function(e){
    e.preventDefault()
    $('.new-card:hidden').slice(0,4).slideDown()
  })
})

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});