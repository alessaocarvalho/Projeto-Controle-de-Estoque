let produtoId = 1;

export function criarProduto(nome, preco, quantidade) {
    return {
        id: produtoId++,
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };
};

export function exibirProduto() {
    return JSON.parse(localStorage.getItem('produtos')) || [];
};