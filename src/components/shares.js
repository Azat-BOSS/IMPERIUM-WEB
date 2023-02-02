import {Swiper, Navigation, Pagination} from "swiper";

const shares = document.querySelector(".shares")
const sharesSwiper = document.querySelector(".shares__swiper")
const sharesNextBtn = shares.querySelector(".shares__button-next")
const sharesPrevBtn = shares.querySelector(".shares__button-prev")
const sharesPag = shares.querySelector(".shares__pagination")

const slidingSharesSlides = () => {
  Swiper.use([Navigation, Pagination])

  new Swiper(sharesSwiper, {
    navigation: {
      nextEl: sharesNextBtn,
      prevEl: sharesPrevBtn
    },
    pagination: {
      el: sharesPag,
      type: "fraction"
    }
  })
}

export { slidingSharesSlides }