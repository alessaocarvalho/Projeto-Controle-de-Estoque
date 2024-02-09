import { exibirProduto } from "./objects/produtos.js";

export function listarProdutos() {
    const produtos = exibirProduto();

    const listaProdutosHTML = produtos.map(produto => {
        return `<li id="produto-${produto.id}">Produto: ${produto.nome}<br>R$: ${produto.preco}<br>Quantidade em Estoque: ${produto.quantidade}
        <div class="opcoes">
                    <button class="editar" data-id="${produto.id}">Editar</button>
                    <button class="remover" data-id="${produto.id}">Remover</button>
                </div>
        </li>`;
    }).join('');

    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutosHTML;

    const editarBtn = document.querySelectorAll('.editar');
    editarBtn.forEach(botao => {
        botao.addEventListener('click', () => {
            const idProduto = parseInt(botao.getAttribute('data-id'));
            editarProduto(idProduto);
        });
    });

    const removerBtn = document.querySelectorAll('.remover');
    removerBtn.forEach(botao => {
        botao.addEventListener('click', () => {
            const idProduto = parseInt(botao.getAttribute('data-id'));
            removerProduto(idProduto);
        });
    });

    function removerProduto(idProduto) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos = produtos.filter(produto => produto.id !== idProduto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        listarProdutos();
    }
};