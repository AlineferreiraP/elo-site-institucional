const servicos = [
    {
        // Adicionamos /static/ no início de cada caminho
        imagem: "/static/img/Desenvolvimento-de-sites-institucionais.png"
    },
    {
        imagem: "/static/img/Sistemas-personalizados1.png"
    },
    {
        imagem: "/static/img/consultoria-tecnologica.png"
    },
    {
        imagem: "/static/img/manutencao-e-suporte.png"
    }
];


const card = document.getElementById("card-servico");
const titulo = document.getElementById("titulo-servico");
const descricao = document.getElementById("descricao-servico");

let indiceAtual = 0;
function atualizarServico() {
    card.style.backgroundImage = `url(${servicos[indiceAtual].imagem})`;
}
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener("click", function() {
    indiceAtual++;
    if (indiceAtual >= servicos.length) {
        indiceAtual = 0;
    }
    atualizarServico();
});

btnPrev.addEventListener("click", function() {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = servicos.length - 1;
    }
    atualizarServico();
});
atualizarServico();