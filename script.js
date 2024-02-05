document.addEventListener('DOMContentLoaded', () => {
    // Captura os radio buttons
    const produtosRadio = document.getElementById('produtos');
    const pedidosRadio = document.getElementById('pedidos');
    const fornecedoresRadio = document.getElementById('fornecedores');
    const contabilidadeRadio = document.getElementById('contabilidade');

    // Adiciona evento de mudança para cada radio button
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

    // Função para ocultar todas as seções e mostrar apenas a seção selecionada
    function toggleSection(secaoId) {
        // Oculta todas as seções
        const secoes = document.querySelectorAll('[id^="secao"]');
        secoes.forEach(function(secao) {
            secao.style.display = 'none';
        });

        // Mostra a seção correspondente ao radio button selecionado
        const secaoSelecionada = document.getElementById('secao-' + secaoId);
        if (secaoSelecionada) {
            secaoSelecionada.style.display = 'block';
        }
    }
    
    const listarProdutosRadio = document.getElementById('listar-produtos');
    const cadastrarProdutosRadio = document.getElementById('cadastrar-produtos');
    const removerProdutosRadio = document.getElementById('remover-produtos');

    listarProdutosRadio.addEventListener('change', () => {
        listarProdutos();
    });

    cadastrarProdutosRadio.addEventListener('change', () => {
        cadastrarProdutos();
    });

    removerProdutosRadio.addEventListener('change', () => {
        removerProdutos();
    });

    function listarProdutos() {
        console.log('Listar Produtos - Implemente sua lógica aqui');
    }

    function cadastrarProdutos() {
        console.log('Cadastrar Produtos - Implemente sua lógica aqui');
    }

    function removerProdutos() {
        console.log('Remover Produtos - Implemente sua lógica aqui');
    }

});
