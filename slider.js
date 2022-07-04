const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".sliderSection")
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const sliderButtonRight = document.querySelector("#sliderButtonRight")
const sliderButtonLeft = document.querySelector("#sliderButtonLeft")

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

