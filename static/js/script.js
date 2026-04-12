
// Carrossel pagina de serviços
const card = document.getElementById("card-servico");

if (card) {

    const servicos = [
        { imagem: "/static/img/Desenvolvimento-de-sites-institucionais.png" },
        { imagem: "/static/img/Sistemas-personalizados1.png" },
        { imagem: "/static/img/consultoria-tecnologica.png" },
        { imagem: "/static/img/manutencao-e-suporte.png" }
    ];

    let indiceAtual = 0;

    function atualizarServico() {
        card.style.backgroundImage = `url(${servicos[indiceAtual].imagem})`;
    }

    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");

    if (btnNext && btnPrev) {

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
    }

    atualizarServico();
}

// Botao conheça nossos serviços pagina incial
document.addEventListener("DOMContentLoaded", function() {

    const botao_inicio = document.getElementById("servicos");

    if (botao_inicio) {
        botao_inicio.addEventListener("click", function() {
            window.location.href = "/servicos";
        });
    }

});