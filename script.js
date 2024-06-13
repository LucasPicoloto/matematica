const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Apos estudar e concluir todo o ensino medio, voce lembra como resolver equaçoe simples?",
        alternativas: [
            {
                texto: "vamos tentar!",
                afirmacao: "bora la entao. "
            },
            {
                texto: "vou tentar com medo!",
                afirmacao: "calma, nao e tao dificil."
            }
        ]
    },
    {
        enunciado: "quano da 15 + 15?",
        alternativas: [
            {
                texto: "30.",
                afirmacao: "isso ai o resultado e 30!"
            },
            {
                texto: "32.",
                afirmacao: "precisamos rever algumas somas com voce!."
            }
        ]
    },
    {
        enunciado: "quanto da 45 + 5?",
        alternativas: [
            {
                texto: "55.",
                afirmacao: "refaça o calculo por gentileza"
            },
            {
                texto: "50",
                afirmacao: "isso ai voce esta no caminho."
            }
        ]
    },
    {
        enunciado: "quanto da 32 + 3",
        alternativas: [
            {
                texto: "35.",
                afirmacao: "boa isso mesmo."
            },
            {
                texto: "36",
                afirmacao: "precisa estudar mais"
            }
        ]
    },
    {
        enunciado: "voce achou dificil? ",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "sao equaçoes simples bem faceis"
            },
            {
                texto: "nao.",
                afirmacao: "meu conselho seria voltar ao quinto ano. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
