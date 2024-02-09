import { cadastrarProduto } from "./cadastrarProduto.js";
import { listarProdutos } from "./listarProdutos.js";

document.addEventListener('DOMContentLoaded', () => {

    const produtosRadio = document.querySelector('#produtos');
    const pedidosRadio = document.querySelector('#pedidos');
    const fornecedoresRadio = document.querySelector('#fornecedores');
    const contabilidadeRadio = document.querySelector('#contabilidade');

    produtosRadio.addEventListener('change', () => {
        toggleSection('produtos');
    });

    pedidosRadio.addEventListener('change', () => {
        toggleSection('pedidos');
    });

    fornecedoresRadio.addEventListener('change', () => {
        toggleSection('fornecedores');
    });

    contabilidadeRadio.addEventListener('change', () => {
        toggleSection('contabilidade');
    });

    function toggleSection(secaoId) {

        const secoes = document.querySelectorAll('[id^="secao"]');
        secoes.forEach(function (secao) {
            secao.style.display = 'none';
        });

        const secaoSelecionada = document.querySelector('#secao-' + secaoId);
        if (secaoSelecionada) {
            secaoSelecionada.style.display = 'block';
        };
    };

    const listarProdutosDetails = document.querySelector('#listar-produtos');
    const cadastrarProdutoDetails = document.querySelector('#cadastrar-produtos');
    const secaoCadastroProdutos = document.querySelector('#secao-cadastro-produtos');
    const secaoListarProdutos = document.querySelector('#secao-listar-produtos');
    const formCadastro = document.querySelector('#form-cadastro-produtos');

    listarProdutosDetails.addEventListener('click', () => {
        listarProdutos();
        secaoListarProdutos.style.display = 'block';
    });

    cadastrarProdutoDetails.addEventListener('click', () => {
        secaoCadastroProdutos.style.display = 'block';
    });

    formCadastro.addEventListener('submit', (event) => {
        cadastrarProduto();
        event.preventDefault();
    })
});