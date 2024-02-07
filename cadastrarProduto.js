import { initLocalStorage } from "./localStorage.js";
import { criarProduto } from "./objects/produtos.js";

export function cadastrarProduto() {
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoProduto = parseFloat(document.getElementById('preco-produto').value);
    const quantidadeProduto = parseFloat(document.getElementById('quantidade-produto').value);

    console.log('Nome: ', nomeProduto);
    console.log('Preço: ', precoProduto);
    console.log('Quantidade: ', quantidadeProduto);

}

const formCadastroProdutos = document.getElementById('form-cadastro-produtos');
formCadastroProdutos.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeProduto = document.getElementById('nome-produto').value;
    const precoProduto = parseFloat(document.getElementById('preco-produto').value);
    const quantidadeProduto = parseFloat(document.getElementById('quantidade-produto').value);

    const novoProduto = criarProduto(nomeProduto, precoProduto, quantidadeProduto);

    console.log('Nome: ', nomeProduto);
    console.log('Preço: ', precoProduto);
    console.log('Quantidade: ', quantidadeProduto);

    const produtosStorage = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosStorage.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtosStorage));

    document.getElementById('form-cadastro-produtos').reset();
})

initLocalStorage();

const produtosArmazenados = localStorage.getItem('produtos');
console.log(produtosArmazenados);