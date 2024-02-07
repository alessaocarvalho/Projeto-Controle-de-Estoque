function initLocalStorage() {
    if (!localStorage.getItem('produtos')) {
        localStorage.setItem('produtos', JSON.stringify([]));
    };
};

export { initLocalStorage };