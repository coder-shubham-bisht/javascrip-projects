const hexBtn= document.querySelector(".hex-btn")
const hexColorContainer=document.querySelector(".hex-color-container")
const rgbColorContainer = document.querySelector(".rgb-color-container")
const rgbValueElement = document.querySelector(".rgbValue")
const hexcolorCopyElement = document.querySelector(".copyHexColorBtn")
const colorInputs=document.querySelectorAll(".colorInput")

const hexColorElement=document.querySelector(".hexColor")

function createRgbColor(){
    const red=parseInt(colorInputs[0].value)
    const green=parseInt(colorInputs[1].value)
    const blue=parseInt(colorInputs[2].value)
    return `rgb(${red},${green},${blue})`
}
function createRandomHexColor() {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
  
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexValues.length);
      hexColor += hexValues[randomIndex];
    }
  
    return hexColor;
  }

  hexBtn.addEventListener("click", () => {
    const hexColor=createRandomHexColor()
    
    hexColorContainer.style.backgroundColor=hexColor
hexColorElement.innerHTML=hexColor
})


colorInputs.forEach(input => {
    input.addEventListener("input", () => {
        const rgbColor= createRgbColor()
        rgbColorContainer.style.backgroundColor=rgbColor
        rgbValueElement.innerHTML=rgbColor
    })
})

  hexcolorCopyElement.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColorElement.innerHTML)
  })
