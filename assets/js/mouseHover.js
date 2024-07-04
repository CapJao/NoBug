document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll('.product-box .img-fluid.product-image'); // Seleciona todas as imagens dos produtos

    productImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            const productUrl = img.getAttribute('data-href');
            if (productUrl) {
                window.location.href = productUrl; // Redireciona para o URL definido em data-href
            }
        });
    });

    const productNames = document.querySelectorAll('.product-box .h5.mt-3');
    const productPrices = document.querySelectorAll('.product-box .product-price');

    productNames.forEach(name => {
        name.style.cursor = 'pointer';
        name.addEventListener('click', function () {
            const productUrl = name.getAttribute('data-href');
            if (productUrl) {
                window.location.href = productUrl; // Redireciona para o URL definido em data-href
            }
        });
    });

    productPrices.forEach(price => {
        price.style.cursor = 'pointer';
        price.addEventListener('click', function () {
            const productUrl = price.getAttribute('data-href');
            if (productUrl) {
                window.location.href = productUrl; // Redireciona para o URL definido em data-href
            }
        });
    });

    const detailImage = document.querySelector('.container .product-image1');

    if (detailImage) {
        detailImage.style.transition = 'transform 0.3s ease';
        detailImage.addEventListener('mouseenter', function () {
            detailImage.style.transform = 'scale(1.2)';
        });
        detailImage.addEventListener('mouseleave', function () {
            detailImage.style.transform = 'scale(1)';
        });
    }
});
