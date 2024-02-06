
import { criarProduto } from "./objects/produtos.js";
import { initLocalStorage } from "./localStorage.js";

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
    const cadastrarProdutosDetails = document.getElementById('cadastrar-produtos');
    const secaoListarProdutos = document.getElementById('secao-listar-produtos');
    const secaoCadastroProdutos = document.getElementById('secao-cadastro-produtos');

    listarProdutosDetails.addEventListener('click', () => {
        listarProdutos();
    });

    cadastrarProdutosDetails.addEventListener('click', () => {
        cadastrarProdutos();
    });

    function listarProdutos() {
        secaoListarProdutos.style.display = 'block';
        console.log('Listar Produtos - Implemente sua lógica aqui');
    }

    function cadastrarProdutos() {
        secaoCadastroProdutos.style.display = 'block';
        console.log('Cadastrar Produtos - Implemente sua lógica aqui');
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


});