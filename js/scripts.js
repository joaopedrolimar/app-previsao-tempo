const key = "1b508f57d424245fd339d0eae49a8da4"

function dadosTela (dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temperatura").innerHTML = Math.floor( dados.main.temp) + " °C"

    document.querySelector(".prev").innerHTML = dados.weather[0].description 

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) { 

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( responsta => responsta.json())

    dadosTela(dados)
    
}

function pesquisar() {
    const cidade = document.querySelector(".input").value

    buscarCidade(cidade)
}
