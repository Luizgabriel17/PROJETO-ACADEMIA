document.getElementById("loginForm")?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const loginInput = document.getElementById("username") as HTMLInputElement;
    const senhaInput = document.getElementById("password") as HTMLInputElement;

    const login = loginInput.value.trim();
    const senha = senhaInput.value.trim();

    function mostrarMensagem(mensagem: string) {
        alert(mensagem);
    }

    // Recupera os dados cadastrados no LocalStorage para a academia
    const academia = JSON.parse(localStorage.getItem("academia") || "{}");
    console.log("Dados do LocalStorage (Academia):", academia); // Verifique os dados

    if (!academia || !academia.login || !academia.senha) {
        mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.");
        return;
    }

    // Verifica o login da academia
    if (login === academia.login && senha === academia.senha) {
        mostrarMensagem("Login bem-sucedido como administrador!");

        // Debug: Verificar se o código está chegando até aqui
        console.log("Login bem-sucedido. Redirecionando para página de administração...");

        // Redireciona para a página do administrador
        window.location.href = "acesso-adm.html";  // Ajuste o caminho se necessário
        return;
    }

    // Recupera os dados do aluno do LocalStorage
    const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
    console.log("Dados do LocalStorage (Aluno):", aluno); // Verifique os dados

    if (!aluno || !aluno.login || !aluno.senha) {
        mostrarMensagem("Nenhum aluno cadastrado em nosso sistema. Cadastre-se primeiro.");
        return;
    }

    // Verifica o login do aluno
    if (login === aluno.login && senha === aluno.senha) {
        mostrarMensagem("Login bem-sucedido! Seja Bem-Vindo, aluno.");

        console.log("Login bem-sucedido. Redirecionando para a página do aluno...");

        // Redireciona para a página do aluno
        window.location.href = "acesso-aluno.html"; // Ajuste o caminho se necessário
    } else {
        mostrarMensagem("Login ou senha incorretos! Por favor, tente novamente.");
    }
});
