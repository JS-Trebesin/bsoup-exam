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

helpBtn.addEventListener("click", () => {
    const allH = document.querySelectorAll("h2")

    allH.forEach((h) => {
        console.log(h.textContent)
        ingredience.forEach((i) => {
            console.log(i)
            if (h.textContent === i) {
                h.style.color = "deeppink"
            }
        })
    })
})

ingredience.forEach((stuff) => {
    const newH = document.createElement("h2")
    newH.innerText = stuff
    newH.classList.add("stuff")
    newH.style.left = `${Math.floor(Math.random() * 70)}%`
    newH.style.top = `${Math.floor(Math.random() * 70)}%`
    newH.style.zIndex = "1"
    container.append(newH)
})

randomStuff.forEach((stuff) => {
    const newH = document.createElement("h2")
    newH.innerText = stuff
    newH.classList.add("stuff")
    newH.style.left = `${Math.floor(Math.random() * 70)}%`
    newH.style.top = `${Math.floor(Math.random() * 70)}%`
    container.append(newH)
})
