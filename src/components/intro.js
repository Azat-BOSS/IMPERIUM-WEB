import { Swiper, Navigation, Pagination } from "swiper";

const introSwiper = document.querySelector(".intro__swiper")
const introPrevEl = introSwiper.querySelector(".intro__button-prev")
const introNextEl = introSwiper.querySelector(".intro__button-next")

const introPag = introSwiper.querySelector(".intro__pagination")

console.log(introPag)
const slidingIntroSwiper = () => {
  Swiper.use([Navigation, Pagination])

  new Swiper(introSwiper, {
    navigation: {
      nextEl: introNextEl,
      prevEl: introPrevEl,
    },
    pagination: {
      el: introPag,
      type: "fraction"
    }
  })
}

export { slidingIntroSwiper }