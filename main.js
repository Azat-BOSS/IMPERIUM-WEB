import "swiper/css/bundle"

import { slidingIntroSwiper } from "./src/components/intro"
import { slidingCommonSliders } from "./src/components/common"

document.addEventListener("DOMContentLoaded", () => {
  slidingIntroSwiper()
  slidingCommonSliders(
    4,
    55,
    "best__container",
    "best__button-next",
    "best__button-prev",
    "best__pagination"
  )
  slidingCommonSliders(
    3,
    31,
    "service__container",
    "service__button-next",
    "service__button-prev",
    "service__pagination"
  )
})