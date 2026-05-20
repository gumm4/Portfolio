// ============================================================
// TEMA CLARO / ESCURO
// ============================================================

const botao = document.getElementById("modoClaroEscuro");
const body = document.body;
const prrojetos = document.getElementById("projetoVisivel");


botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


prrojetos.addEventListener("click", () => {

    if (prrojetos.dataset.invisivel === "true") {

        prrojetos.dataset.invisivel = "false";
    }  else {

        prrojetos.dataset.invisivel = "true";

    }
   
});

// ============================================================
// VARIÁVEIS PESSOAIS
// ============================================================

const NOME = "Luiz Gustavo";
let tituloProfissional = "Desenvolvedor Iniciante";
let introducao = "Olá, seja bem vindo ao meu site pessoal, me chamo Luiz, tenho 18 anos e aqui nesse site, você pode conhecer um pouco mais sobre mim, um pouco de minhas qualidades profissionais e também sobre meus gostos pessoais.";
let minhaBios = "Este é um projeto que trabalhei usando a linguagem Python, junto da biblioteca CustomTkInter, tendo como função principal gestão de vagas para estacionamentos.";
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let hoje = new Date();
let mesAtual = hoje.getMonth() + 1;
let anoAtual = hoje.getFullYear();
let diaAtual = hoje.getDate();

let curso = {
    nome: "Análise e Desenvolvimento de Sistemas",
    ano: 2026,
    disciplinaAtual: "Linguagens de Programação"
};

// ============================================================
// PREENCHENDO O HTML
// ============================================================

document.getElementById("meuNome").innerText = NOME;
document.getElementById("titulo").innerText = tituloProfissional;
document.getElementById("minhaIntroducao").innerText = introducao;
document.getElementById("minhaBio").innerText = minhaBios;
document.getElementById("anoFormatura").innerText = anoFormatura;

// ============================================================
// CORREÇÃO 1 — FUNÇÃO DE TEMPO RESTANTE
// ============================================================

function calculoRestante() {
    let anosRestantes = anoFormatura - anoAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let diasRestantes = diaFormatura - diaAtual;

    if (
        anosRestantes < 0 ||
        (anosRestantes === 0 && mesesRestantes < 0) ||
        (anosRestantes === 0 && mesesRestantes === 0 && diasRestantes <= 0)
    ) {
        document.getElementById("tempoRestante").innerText = "Curso Concluído! 🎓";
    } else {
        document.getElementById("tempoRestante").innerText =
            `Tempo restante para a formatura: ${anosRestantes} ano(s), ${mesesRestantes} mês(es) e ${diasRestantes} dia(s)`;
    }
}

// ============================================================
// CORREÇÃO 2 — notasAula() agora usa RETURN, sem document.write
//              e a condição corrigida para nota < 6
// ============================================================

function notasAula() {
    let nota = 8;

    if (nota < 6) {
        return "Reprovado ❌";
    } else {
        return "Aprovado ✅";
    }
}

// Exibe o resultado de notasAula corretamente
document.write(`<p>Situação: ${notasAula()}</p>`);

// ============================================================
// CORREÇÃO 3 e 4 — semanaDia() com typo e variável corrigidos
// ============================================================

function semanaDia() {
    let diaSemana = hoje.getDay() + 1;
    let diaEscrito;

    switch (diaSemana) {
        case 1: diaEscrito = "Domingo"; break;
        case 2: diaEscrito = "Segunda-Feira"; break;
        case 3: diaEscrito = "Terça-Feira"; break;
        case 4: diaEscrito = "Quarta-Feira"; break;
        case 5: diaEscrito = "Quinta-Feira"; break;
        case 6: diaEscrito = "Sexta-Feira"; break;
        case 7: diaEscrito = "Sábado"; break;
        default: diaEscrito = "Dia Inválido";
    }

    // ✅ CORREÇÃO 3: innerText (era innnerText com 3 n's)
    // ✅ CORREÇÃO 4: diaEscrito (era diaSemana, que mostrava só o número)
    document.getElementById("diaAtualmente").innerText = `Hoje é: ${diaEscrito}`;
}

// ============================================================
// CORREÇÃO 5 — Apenas o do...while, sem o while redundante
// ============================================================

let num;
do {
    num = parseInt(prompt("Digite um número par:"));
    if (isNaN(num)) {
        alert("Por favor, digite um número válido!");
    } else if (num % 2 !== 0) {
        alert("Esse número não é par. Tente novamente!");
    }
} while (isNaN(num) || num % 2 !== 0);

alert(`✅ Correto! ${num} é um número par.`);

// ============================================================
// FOR, FOR...IN, FOR...OF (sem alterações, já estavam corretos)
// ============================================================

for (let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "Par" : "Ímpar";
    console.log(`${i} é ${pares}`);
}

let object = {
    nome: "Luiz Gustavo",
    idade: "18",
    curso: "Análise e Desenvolvimento de Sistemas"
};

for (let chave in object) {
    document.write(`<p>${chave}: ${object[chave]}</p>`);
}

let aluno = ["Luiz", "Lucas", "Otávio", "Maria", "Felipe"];
for (let contem of aluno) {
    if (contem === "Luiz") {
        document.write(`<p>${contem} - Presente</p>`);
    } else {
        document.write(`<p>${contem} - Ausente</p>`);
    }
}

// ============================================================
// HABILIDADES
// ============================================================

let objectt = {
    "Habilidades Técnicas": ["HTML", "CSS", "JavaScript", "Python"],
    "Habilidades Interpessoais": ["Comunicação", "Resolução de Problemas", "Trabalho em Equipe"],
    "Habilidades de Aprendizado": ["Curiosidade", "Adaptabilidade", "Autodidatismo"]
};

for (let categoria in objectt) {
    document.write(`<h3>${categoria}</h3>`);
    for (let habilidade of objectt[categoria]) {
        document.write(`<p>${habilidade}</p>`);
    }
}

// ============================================================
// PROJETOS
// ============================================================

let projetos = [
    {
        nome: "Parking N' Space",
        descricao: "Sistema para gerenciar vagas de estacionamento, com controle de entrada e saída de veículos.",
        conhecimentos: ["GitHub", "Pip", "PyInstaller"],
        tecnologias: ["Python", "Sqlite", "Tkinter", "CustomTkinter", "FPDF", "Pip", "PyInstaller"]
    },
    {
        nome: "Controle de Aluguel de Quadras",
        descricao: "Sistema para gerenciar o aluguel de quadras esportivas, com controle de reservas e pagamentos.",
        conhecimentos: ["GitHub", "Pip", "PyInstaller"],
        tecnologias: ["Python", "Sqlite", "Tkinter", "CustomTkinter", "FPDF", "Pip", "PyInstaller"]
    },
    {
        nome: "Página Pessoal Baseada em Blue Lock",
        descricao: "Projeto de página pessoal inspirado na série de anime e mangá Blue Lock.",
        conhecimentos: ["GitHub", "HTML", "CSS", "JavaScript"],
        tecnologias: ["HTML", "CSS", "JavaScript"]
    }
];

projetos.forEach(function(projeto) {
    document.write(`<h3>${projeto.nome}</h3>`);
    document.write(`<p>${projeto.descricao}</p>`);
    document.write(`<p><strong>Conhecimentos:</strong> ${projeto.conhecimentos.join(", ")}</p>`);
    document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`);
});

document.write(`<h2>Projetos que utilizam Python:</h2>`);
projetos.forEach(function(projeto) {
    if (projeto.tecnologias.includes("Python")) {
        document.write(`<h3>${projeto.nome}</h3>`);
        document.write(`<p>${projeto.descricao}</p>`);
        document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`);
    }
});

document.write(`<h2>Projetos que utilizam HTML:</h2>`);
projetos.forEach(function(projeto) {
    if (projeto.tecnologias.includes("HTML")) {
        document.write(`<h3>${projeto.nome}</h3>`);
        document.write(`<p>${projeto.descricao}</p>`);
        document.write(`<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>`);
    }
});

// ============================================================
// CORREÇÃO 6 — createElement agora insere no DOM com appendChild
// ============================================================

const h2Projeto = document.createElement("h2");
h2Projeto.innerText = projetos[0].nome;
document.body.appendChild(h2Projeto);

console.log(projetos[0].descricao);
console.log(projetos[0].conhecimentos);
console.log(projetos[0].tecnologias);

// ============================================================
// CHAMADAS FINAIS
// ============================================================

calculoRestante();
semanaDia();

// ============================================================
// FUNÇÃO DO BOTÃO — ALTERA O FUNDO DA DIV CAIXA
// ============================================================

const muda = document.getElementById("mudaTexto");
const caixa = document.getElementById("caixa");

muda.addEventListener("click", () => {
    caixa.classList.toggle("fundo-alterado");

    // Atualiza o texto do botão para indicar o estado atual
    if (caixa.classList.contains("fundo-alterado")) {
        mudaTexto.innerText = "↩️ Restaurar Fundo da Caixa";
    } else {
        mudaTexto.innerText = "🎨 Alterar Fundo da Caixa";
    }
});

console.log("Iniciando...");

setTimeout(() =>{

    console.log("Dados Carregados!");
}, 3000);

console.log("FIm do Carregamento.");

const minhaPromessa = new Promise((resolve, reject) => {

    const deuCerto = true;

    if (deuCerto) {
        resolve("Operação concluída com sucesso!");
    } else {
        reject("Ops")
    }
});

minhaPromessa
    .then((resultado) => console.log("Ok", resultado))
    .catch(erro => console.log("Erro",erro));

//async/await

    fetch('https://api.example.com/data')
    .then(resposta => resposta.json())
    .then(dados => console.log("Dados recebidos:", dados))
    .catch(erro => console.log("Erro",erro));


    async function buscarDados() {

        const resposta = await fetch("https://api.exemplo.com/dados")
        const dados = await resposta.json();
        console.log("Dados recebidos", dados);
        
    };

    async function buscarAPI(url){
        try {
            const resposta = await fetch(url);
            if (!resposta.ok) {
                throw new Error(`Erro http: ${resposta.status} ${resposta.statusText}`);
            }

            const dados = await resposta.json();

            return dados;
        } catch (erro) {
            console.log("Erro",erro);
            return null;
        }
    }


    /*
    1°Passo - Achar a URL da API; https://api.quotable.io/random
    2°Passo - Ver quais endpoints estão disponíveis
    3°Passo - Ver quais parâmetros são necessários para cada endpoint
    4°Passo - Fazer a primeira chamada no navegador: verem o json
    5°Passo - Identificar no console.log qual propriedade tem o dado desejado
    */

    async function buscasPokemon(nome) {

        const dados = await buscarAPI(`https://pokeapi.co/api/v2/pokemon${nome}`);

        if (dados) {
            console.log(`O Pokémon ${dados.name} tem ID ${dados.id} e é tipo ${dados.types}`);
            console.log(`Imagem:`, dados.sprites.font_default);
        }
        
    }

    buscarPokemon('mewtwo');