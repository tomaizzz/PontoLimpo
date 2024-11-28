const papel = document.getElementById("papel-btn")
const aluminio = document.getElementById("aluminio-btn")
const plastico = document.getElementById("plastico-btn")
const papelao = document.getElementById("papelao-btn")

const papelBox = document.getElementById("cont-papel")
const aluminioBox = document.getElementById("cont-aluminio")
const plasticoBox = document.getElementById("cont-plastico")
const papelaoBox = document.getElementById("cont-papelao")

function ativarBox(box){
    box.style.display = "block"
}

function desativarBox(box){
    box.style.display = "none"
}

function ativarBotao(botao){
    botao.style.color = "#ffffff"
    botao.style.backgroundColor = "#0f5f12"
}

function desativarBotao(botao){
    botao.style.color = "#0f5f12"
    botao.style.backgroundColor = "#E2E2E2"
}

function clickPapel(){
    ativarBotao(papel)
    desativarBotao(aluminio)
    desativarBotao(plastico)
    desativarBotao(papelao)

    ativarBox(papelBox)
    desativarBox(aluminioBox)
    desativarBox(plasticoBox)
    desativarBox(papelaoBox)
}

function clickAluminio(){
    ativarBotao(aluminio)
    desativarBotao(papel)
    desativarBotao(plastico)
    desativarBotao(papelao)

    ativarBox(aluminioBox)
    desativarBox(papelBox)
    desativarBox(plasticoBox)
    desativarBox(papelaoBox)
}

function clickPlastico(){
    ativarBotao(plastico)
    desativarBotao(aluminio)
    desativarBotao(papel)
    desativarBotao(papelao)

    ativarBox(plasticoBox)
    desativarBox(aluminioBox)
    desativarBox(papelBox)
    desativarBox(papelaoBox)
}

function clickPapelao(){
    ativarBotao(papelao)
    desativarBotao(aluminio)
    desativarBotao(plastico)
    desativarBotao(papel)

    ativarBox(papelaoBox)
    desativarBox(aluminioBox)
    desativarBox(plasticoBox)
    desativarBox(papelBox)
}