import { criarProduto } from "./objects/produtos.js";
import { listarProdutos } from "./listarProdutos.js";
import { initLocalStorage } from "./localStorage.js";

export function cadastrarProduto() {
    try {
        const nomeProduto = document.querySelector('#nome-produto').value;
        const precoProduto = parseFloat(document.querySelector('#preco-produto').value);
        const quantidadeProduto = parseFloat(document.querySelector('#quantidade-produto').value);

        if (!nomeProduto || precoProduto <= 0, isNaN(precoProduto) || quantidadeProduto <= 0, isNaN(quantidadeProduto)) {
            console.error('Os dados do produto são inválidos.');
            return;
        }

        const novoProduto = criarProduto(nomeProduto, precoProduto, quantidadeProduto);

        const produtosArmazenados = JSON.parse(localStorage.getItem('produtos')) || [];

        produtosArmazenados.push(novoProduto);

        localStorage.setItem('produtos', JSON.stringify(produtosArmazenados));

        listarProdutos(produtosArmazenados);

        document.getElementById('form-cadastro-produtos').reset();

        console.log('Produto cadastrado com sucesso:', novoProduto);
    } catch (error) {
        console.error('Ocorreu um erro ao cadastrar o produto:', error);
    }
};

initLocalStorage();