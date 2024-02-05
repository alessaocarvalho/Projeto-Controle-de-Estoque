document.addEventListener('DOMContentLoaded', function() {
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
});
