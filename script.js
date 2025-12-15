const tituloDaHome = document.getElementById("title-home")

tituloDaHome.innerHTML = "Kely"
tituloDaHome.style.color = "#d3a8a8ff"
tituloDaHome.setAttribute("style", "color: #7159c1; font-size: 80px")

const buttonHome = document.getElementById("btn-home")
const bg2 = document.getElementById("bg2")

buttonHome.innerHTML = "Clique aqui"
buttonHome.addEventListener('click', () => { tituloDaHome.innerHTML = "Seu futuro começa hoje!!!"; bg2.style.backgroundcolor = "#f32727ff"; });

//Ao clicar no botão
//O h1 da página deverá receber o seguinte texto: Seu futuro começa hoje!!!

//mude a cor do background-color de bg2 para red ao clicar no botao