const ingredience = ["česnek", "voda", "sůl", "kmín"]
const randomStuff = [
    "Bolek",
    "prací prášek",
    "mýdlo",
    "inkoust",
    "lepidlo",
    "zubní pasta",
    "třpytky",
]

const helpBtn = document.querySelector(".help")
const container = document.querySelector(".container")
const allH = document.querySelectorAll("h2")

helpBtn.addEventListener("click", () => {
    allH.forEach((h) => {
        console.log(h.textContent)
        ingredience.forEach((i) => {
            console.log(i)
            if (h.textContent === i) {
                h.style.color = "deeppink"
                h.style.backgroundColor = "white"
                h.style.paddingInline = "10px"
                h.style.borderRadius = "5px"
            }
        })
    })
})

allH.forEach((h) => {
    h.style.left = `${Math.floor(Math.random() * 70)}%`
    h.style.top = `${Math.floor(Math.random() * 70)}%`
    ingredience.forEach((i) => {
        console.log(i)
        if (h.textContent === i) {
            h.style.zIndex = 1
        }
    })
})
