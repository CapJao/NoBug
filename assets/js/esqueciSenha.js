document.addEventListener("DOMContentLoaded", function() {
    var forgotPasswordLink = document.getElementById("forgotPassword");
    var forgotPasswordPopup = document.getElementById("forgotPasswordPopup");
    var closePopupButton = forgotPasswordPopup.querySelector(".close-btn");

    // Função para abrir o popup
    function openPopup() {
        forgotPasswordPopup.style.display = "block";
    }

    // Função para fechar o popup
    function closePopup() {
        forgotPasswordPopup.style.display = "none";
    }

    // Evento para abrir o popup quando o link "Esqueceu a senha?" é clicado
    forgotPasswordLink.addEventListener("click", openPopup);

    // Evento para fechar o popup quando o botão de fechar é clicado
    closePopupButton.addEventListener("click", closePopup);

    // Evento para fechar o popup quando o usuário clica fora dele
    window.addEventListener("click", function(event) {
        if (event.target == forgotPasswordPopup) {
            closePopup();
        }
    });
});