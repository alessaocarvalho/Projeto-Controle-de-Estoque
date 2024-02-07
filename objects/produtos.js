export function criarProduto(nome, preco, quantidade) {
    return {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };
};

export function exibirProduto() {
    return JSON.parse(localStorage.getItem('produtos')) || [];
};