let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola da copa.png",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carrinho.png",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.png",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor.jpg",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.png",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha.png",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

function init() {
    let itensSection = document.getElementById("itens_section");

    ITENS_LOJA.forEach(item => {
        itensSection.innerHTML += 
        `
        <div class="item">
            <div class="img-bg">
                <img class="item-img" src="${item.url_img}" alt="Imagem do Produto">
            </div>

            <h1 class="item-name">${item.nome}</h1>
            <h3 class="item-desc">${item.descricao}</h3>
            <h2 class="item-price">${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        </div>
        `;
    }) 
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});
