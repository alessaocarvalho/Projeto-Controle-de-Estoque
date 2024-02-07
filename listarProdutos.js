import { exibirProduto } from "./objects/produtos.js";

export function listarProdutos() {
    const produtos = exibirProduto();

    const listaProdutosHTML = produtos.map(produto => {
        return `<li>${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade}</li>`;
    }).join('');

    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutosHTML;
};