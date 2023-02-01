import { Swiper, Navigation, Pagination } from "swiper";

const slidingCommonSliders = (
  pageCount, 
  spaceBetw,
  swiperCont,
  btnNext, 
  btnPrev, 
  pagin
  ) => {
  Swiper.use([Navigation, Pagination])
  
  const swiperContainer = document.querySelector(`.${swiperCont}`)
  const nextBtn = document.querySelector(`.${btnNext}`)
  const prevBtn = document.querySelector(`.${btnPrev}`)

  const swiperPag = document.querySelector(`.${pagin}`) 

  new Swiper(swiperContainer, {
    slidesPerView: pageCount,
    spaceBetween: spaceBetw,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    },
    pagination: {
      el: swiperPag,
      type: "fraction"
    }
  })
}

export { slidingCommonSliders }