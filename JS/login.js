var _a;
(_a = document.getElementById("loginForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var loginInput = document.getElementById("username");
    var senhaInput = document.getElementById("password");
    var login = loginInput.value.trim();
    var senha = senhaInput.value.trim();
    // Recupera os dados cadastrados no LocalStorage
    var academia = JSON.parse(localStorage.getItem("academia") || "{}");
    if (!academia || !academia.login || !academia.senha) {
        mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.", "erro");
        return;
    }
    if (login === academia.login && senha === academia.senha) {
        mostrarMensagem("Login bem-sucedido!", "sucesso");
        // Redireciona para a página da academia ou dashboard
        window.location.href = "acesso-adm.html"; // Altere para a página desejada
    }
    else {
        mostrarMensagem("Login ou senha incorretos.", "erro");
    }
});
function mostrarMensagem(mensagem, tipo) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.color = tipo === "sucesso" ? "green" : "red";
}
