const formulario = document.querySelector("#formularioAcademico")
console.log(formulario);

const campoNome = document.querySelector("#nome")
console.log(campoNome);

const notaUm = document.querySelector("#notaUm")
console.log(notaUm);

const notaDois = document.querySelector("#notaDois")
console.log(notaDois);

const resultados = document.querySelector("#resultados");
console.log(resultados);

const botaoCalcularMedia = document.querySelector("#btnCalcular");
console.log(botaoCalcularMedia);

let mediaCalculada;
let aprovacao;
let mensagemFinal = '...';

function calcularMedia(valorNotaUm, valorNotaDois) {
    return (valorNotaUm + valorNotaDois) / 2;
}

function verificarAprovacao(mediaCalculada) {
    if (mediaCalculada >= 7) {
        return true;
    }
    return false;
    }

    function mensagemAprovacao(aprovacao){
        switch (aprovacao) {
            case true:
                return "Aprovado";
                case false:
                    return "Reprovado";
        }
    }

    botaoCalcularMedia.addEventListener('click', function () {
        valorNotaDois = Number(notaDois.value);
        valorNotaUm = Number(notaUm.value);

        mediaCalculada = calcularMedia(valorNotaUm, valorNotaDois);
        aprovacao = verificarAprovacao(mediaCalculada);
        mensagemFinal = mensagemAprovacao(aprovacao);

        resultados.textContent = mensagemFinal;
    })


