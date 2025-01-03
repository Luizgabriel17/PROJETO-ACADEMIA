document.getElementById("loginForm")?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const loginInput = document.getElementById("username") as HTMLInputElement;
    const senhaInput = document.getElementById("password") as HTMLInputElement;

    const login = loginInput.value.trim();
    const senha = senhaInput.value.trim();

    // Recupera os dados cadastrados no LocalStorage
    const academia = JSON.parse(localStorage.getItem("academia") || "{}");

    if (!academia || !academia.login || !academia.senha) {
        mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.", "erro");
        return;
    }

    if (login === academia.login && senha === academia.senha) {
        mostrarMensagem("Login bem-sucedido!", "sucesso");
        // Redireciona para a página da academia ou dashboard
        window.location.href = "site-academia.html";  // Altere para a página desejada
    } else {
        mostrarMensagem("Login ou senha incorretos.", "erro");
    }
});