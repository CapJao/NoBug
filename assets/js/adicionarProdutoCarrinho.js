document.addEventListener("DOMContentLoaded", function() {
    var cart = [];
    var cartModalBody = document.querySelector("#cartModal .modal-body");
    var notificationBanner = document.getElementById("notificationBanner");
    var notificationMessage = document.getElementById("notificationMessage");
    var cartCount = document.getElementById("cart-count");

    function updateCartModal() {
        if (cart.length === 0) {
            cartModalBody.innerHTML = "<p>Seu carrinho está vazio.</p>";
            cartCount.style.display = "none";
        } else {
            cartModalBody.innerHTML = "";
            var total = 0;
            var ul = document.createElement("ul");
            ul.classList.add("list-group");

            cart.forEach(function(item) {
                total += item.price * item.quantity;
                var li = document.createElement("li");
                li.classList.add("list-group-item");
                li.textContent = item.name + " - Tamanho: " + item.size + " - Quantidade: " + item.quantity + " - R$" + (item.price * item.quantity).toFixed(2);
                ul.appendChild(li);
            });

            var totalLi = document.createElement("li");
            totalLi.classList.add("list-group-item", "active");
            totalLi.textContent = "Total: R$" + total.toFixed(2);
            ul.appendChild(totalLi);

            cartModalBody.appendChild(ul);
            cartCount.textContent = cart.length;
            cartCount.style.display = "block";
        }
    }

    function addToCart() {
        var size = selectedSize;
        var quantity = parseInt(document.getElementById("quantityInput").value);
        var name = "Camiseta Básica Branca";
        var price = 79.90;

        if (size === "") {
            alert("Por favor, selecione um tamanho.");
            return;
        }

        var product = {
            name: name,
            size: size,
            quantity: quantity,
            price: price
        };

        cart.push(product);
        updateCartModal();

        // Show notification
        notificationMessage.innerHTML = `
            <h4 style="color: green;">Produto Adicionado ao Carrinho!</h4>
            <p>${name} - Tamanho: ${size} - Quantidade: ${quantity}</p>
            <h4>Total: R$${(price * quantity).toFixed(2)}</h4>
        `;
        notificationBanner.classList.add("show");

        setTimeout(function() {
            notificationBanner.classList.remove("show");
        }, 5000);
    }

    document.getElementById("buyButton").addEventListener("click", addToCart);
    document.getElementById("clearCartButton").addEventListener("click", function() {
        cart = [];
        updateCartModal();
    });
    document.getElementById("closeNotification").addEventListener("click", function() {
        notificationBanner.classList.remove("show");
    });
});
