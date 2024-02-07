import { exibirProduto } from "./objects/produtos.js";

export function listarProdutos() {
    const produtos = exibirProduto();

    const listaProdutosHTML = produtos.map(produto => {
        return `<li>Produto: ${produto.nome}<br>R$: ${produto.preco}<br>Quantidade em Estoque: ${produto.quantidade}
        <div class="opcoes">
                    <button class="editar">Editar</button>
                    <button class="remover">Remover</button>
                </div>
        </li>`;
    }).join('');

    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutosHTML;
};