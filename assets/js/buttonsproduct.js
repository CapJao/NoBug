let selectedSize = ""; // Variável para armazenar o tamanho selecionado
let cartItems = []; // Array para armazenar itens no carrinho

function selectSize(size) {
    // Remove a classe 'active' de todos os botões de tamanho
    let sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão do tamanho selecionado
    selectedSize = size;
    let selectedButton = document.querySelector('.size-btn[data-size="' + size + '"]');
    selectedButton.classList.add('active');
}

function decreaseQuantity() {
    let quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    let quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value);

    quantityInput.value = currentValue + 1;
}
