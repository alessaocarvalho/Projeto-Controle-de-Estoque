export function criarProduto(nome, preco, quantidade) {
    return {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };
};

export function listarProdutosEstoque() {
    return JSON.parse(localStorage.getItem('produtos')) || [];
};