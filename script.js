function selecionado1(card) {


    const cardSelecionadoAntes = document.querySelector(".comida .borda");

    if (cardSelecionadoAntes !== null) {
        cardSelecionadoAntes.classList.remove("borda")
    }

    card.classList.add("borda");

    verificar();
}

function selecionado2(card) {

    const cardSelecionadoAntes = document.querySelector(".bebida .borda");

    if (cardSelecionadoAntes !== null) {
        cardSelecionadoAntes.classList.remove("borda")
    }

    card.classList.add("borda");

    verificar();
}

function selecionado3(card) {

    const cardSelecionadoAntes = document.querySelector(".sobremesa .borda");

    if (cardSelecionadoAntes !== null) {
        cardSelecionadoAntes.classList.remove("borda")
    }

    card.classList.add("borda");

    verificar();
}

function verificar() {

    const grupo1 = document.querySelector(".comida .borda");
    const grupo2 = document.querySelector(".bebida .borda");
    const grupo3 = document.querySelector(".sobremesa .borda");

    const botao = document.getElementById("meuBotao");

    if (grupo1 && grupo2 && grupo3) {
        botao.disabled = false;
        botao.classList.add("ativo");
    } else {
        botao.disabled = true;
        botao.classList.remove("ativo");
    }

}

function pagina() {

    const novaPagina = document.querySelector(".container");
    novaPagina.classList.remove("escondido");

    const prato = document.querySelector(".comida .borda");
    const bebida = document.querySelector(".bebida .borda");
    const sobremesa = document.querySelector(".sobremesa .borda");

    const nomePrato = prato.querySelector("h4").textContent;
    const nomeBebida = bebida.querySelector("h4").textContent;
    const nomeSobremesa = sobremesa.querySelector("h4").textContent;

    const precoPrato = parseFloat(prato.querySelector("h6").textContent.replace(",", "."));
    const precoBebida = parseFloat(bebida.querySelector("h6").textContent.replace(",", "."));
    const precoSobremesa = parseFloat(sobremesa.querySelector("h6").textContent.replace(",", "."));

    const total = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    const confirmacao = document.querySelector(".contas");

    const mensagem = `Confirme seu pedido:
        ${nomePrato} - R$ ${precoPrato.toFixed(2)}
        ${nomeBebida} - R$ ${precoBebida.toFixed(2)}
        ${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}
        Total: R$ ${total}`
    const mensagemCodificada = encodeURIComponent(mensagem);

    confirmacao.innerHTML =
        ` <h3>Confirme seu pedido:</h3><br><br>
        <p>${nomePrato} - R$ ${precoPrato.toFixed(2)}</p><br>
        <p>${nomeBebida} - R$ ${precoBebida.toFixed(2)}</p><br>
        <p>${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}</p><br>
        <h3>Total: R$ ${total}</h3><br>
        <a href="https://api.whatsapp.com/send?phone=5521980773700&text=${mensagemCodificada}">Tudo certo,pode pedir!</a>
        <button class="botao2" onclick="cancelar()">cancelar</button> `;

}



function cancelar() {

    const voltarPagina = document.querySelector(".container");
    voltarPagina.classList.add("escondido");
}





