const btn = document.getElementById("btn");
const adviceText = document.querySelector(".advice-text");
const slipId = document.querySelector("#slip-id");
const url = "https://api.adviceslip.com/advice"

btn.addEventListener("click", () => {
    gerarConselhoAleatorio()
})

async function gerarConselhoAleatorio() {
    const resposta = await fetch(url)
    const data = await resposta.json()
    adviceText.innerHTML = data.slip.advice
    slipId.innerHTML = data.slip.id
}

gerarConselhoAleatorio();


