import { cadastrarProduto } from "./cadastrarProduto.js";
import { listarProdutos } from "./listarProdutos.js";

document.addEventListener('DOMContentLoaded', () => {

    const produtosRadio = document.getElementById('produtos');
    const pedidosRadio = document.getElementById('pedidos');
    const fornecedoresRadio = document.getElementById('fornecedores');
    const contabilidadeRadio = document.getElementById('contabilidade');

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

        const secaoSelecionada = document.getElementById('secao-' + secaoId);
        if (secaoSelecionada) {
            secaoSelecionada.style.display = 'block';
        }
    }

    const listarProdutosDetails = document.getElementById('listar-produtos');
    const cadastrarProdutoDetails = document.getElementById('cadastrar-produtos');
    const secaoCadastroProdutos = document.getElementById('secao-cadastro-produtos');
    const secaoListarProdutos = document.getElementById('secao-listar-produtos');

    listarProdutosDetails.addEventListener('click', () => {
        listarProdutos();
        secaoListarProdutos.style.display = 'block';
    });

    cadastrarProdutoDetails.addEventListener('click', () => {
        cadastrarProduto();
        secaoCadastroProdutos.style.display = 'block';
    });
});