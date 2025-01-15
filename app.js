//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Jogo do número secreto'
let listasDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumAletorio();
let tentativas = 1;

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value; //input value, forma de verificaar o valor do input
    if (chute == numeroSecreto) {
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto){
            exibirTextoNatela('p', 'O número secreto é menor');
            tentativas++;
            limparCampo()
        } else{
            exibirTextoNatela('p', 'O número secreto é maior');
            tentativas++;
            limparCampo()
        }
    }
    
}

function gerarNumAletorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeElementosLista = listasDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite ) {
        listasDeNumerosSorteados = [];
    }

    if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAletorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumAletorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}
