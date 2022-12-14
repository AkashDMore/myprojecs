const right = document.getElementById("right")
const left = document.getElementById("left")
const up = document.getElementById("up")
const down = document.getElementById("down")

const box = document.getElementById("box")

let positionLeft = 0
let positionTop = 0

right.addEventListener("click", () => {
  positionLeft += 10 // same as positionLeft = positionLeft+10
  box.style.left = positionLeft + "px"
})

left.addEventListener("click", () => {
  positionLeft -= 10 // same as positionLeft = positionLeft+10
  box.style.left = positionLeft + "px"
})

down.addEventListener("click", () => {
  positionTop += 10 // same as positionLeft = positionLeft+10
  box.style.top = positionTop + "px"
})

up.addEventListener("click", () => {
  positionTop -= 10 // same as positionLeft = positionLeft+10
  box.style.top = positionTop + "px"
})
document.body.addEventListener("keyup", (e)=>{

  if(e.key === "ArrowUp"){
    positionTop -= 10 // same as positionLeft = positionLeft+10
    box.style.top = positionTop + "px"
  }
  if(e.key === "ArrowDown"){
    positionTop += 10
    box.style.top = positionTop + "px"
  }
  if(e.key === "ArrowLeft"){
    positionLeft -= 10
    box.style.left = positionLeft + "px"
  }
  if(e.key === "ArrowRight"){
    positionLeft += 10
    box.style.left = positionLeft + "px"
  }
})