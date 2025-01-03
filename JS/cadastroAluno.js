// Função para mostrar mensagens
function mostrarMensagem1(mensagem1, tipo) {
    alert(`${tipo.toUpperCase()}: ${mensagem1}`);
}

// Evento para lidar com o envio do formulário
document.getElementById("cadastroAlunoform")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeAluno").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação dos campos
    if (!nome || !idade || !cpf || !login || !senha) {
        mostrarMensagem1("Por favor, preencha todos os campos.", "erro");
        return;
    }

    // Função para validar o CPF
    function validarCPF(cpf) {
        const cpfLimpo = cpf.replace(/[^\d]+/g, '');
        return cpfLimpo.length === 11; // Validação básica
    }

    if (!validarCPF(cpf)) {
        mostrarMensagem1("CPF inválido.", "erro");
        return;
    }

    // Criando um novo aluno
    const novoAluno = { nome, idade, cpf, login, senha };

    // Salvar o aluno no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    mostrarMensagem1("Aluno cadastrado com sucesso!", "sucesso");

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

    // Limpar os campos do formulário
    document.getElementById("cadastroAlunoform").reset();
});
