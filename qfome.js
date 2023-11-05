let EscolherSalgado
let EscolherBebida
let EscolherSobremesa

let contador = 0

function selecionarSalgado(salgadinho){

    EscolherSalgado = salgadinho

    const selecionado = document.querySelector('.salgados .escolhido')

    if(selecionado !== null){
        selecionado.classList.remove('escolhido')
    }

    contador++

    const opcao = document.querySelector(salgadinho)
    opcao.classList.add('escolhido')
    
    habilitarBotao()
}

function selecionarBebida(beber){

    EscolherBebida = beber
    const QualBebida = document.querySelector('.bebidas .escolhido')

    if(QualBebida !== null){
        QualBebida.classList.remove('escolhido')
    }

    contador++

    const opcao = document.querySelector(beber)
    opcao.classList.add('escolhido')
    habilitarBotao()
}

function selecionarDoce(docinho){

    EscolherSobremesa = docinho

    const QualDoce = document.querySelector('.doces .escolhido')

    if(QualDoce !== null){
        QualDoce.classList.remove('escolhido')
    }

    contador++

    const opcao = document.querySelector(docinho)
    opcao.classList.add('escolhido')
    habilitarBotao()
}

function habilitarBotao(){
    if(contador ==3){
        const btnHabilitado = document.querySelector('.btn-avancar')
        btnHabilitado.classList.add('corDoBtn')
        btnHabilitado.innerHTML = "Finalizar"
    }
}

function btn(){
    
    const btnFinalizar = document.querySelector('.pedido')
    btnFinalizar.classList.add('ResumoPedido')
    /*btnFinalizar.innerHTML = `${EscolherSalgado}=      5€`
    btnFinalizar.innerHTML = `${EscolherBebida}=      2€`
    btnFinalizar.innerHTML = `${EscolherSobremesa}=      4€`*/
}