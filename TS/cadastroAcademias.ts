// Interface para representar uma academia
interface Academia {
    nome: string;
    responsavel: string;
    cnpj: string; // Ajustado para string, pois o CNPJ contém 14 dígitos
    endereco: string;
    login: string;
    senha: string;
}

// Função para validar o CNPJ
function validarCNPJ(cnpj: string): boolean {
    const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14; // Validação básica
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem: string, tipo: "sucesso" | "erro"): void {
    alert(`${tipo.toUpperCase()}: ${mensagem}`);
}

// Evento para lidar com o envio do formulário
document.getElementById("cadastroAcademiaForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = (document.getElementById("nomeAcademia") as HTMLInputElement).value.trim();
    const responsavel = (document.getElementById("responsavel") as HTMLInputElement).value.trim();
    const cnpj = (document.getElementById("cnpj") as HTMLInputElement).value.trim();
    const endereco = (document.getElementById("endereco") as HTMLInputElement).value.trim();
    const login = (document.getElementById("login") as HTMLInputElement).value.trim();
    const senha = (document.getElementById("senha") as HTMLInputElement).value.trim();

    // Validação dos campos
    if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }

    if (!validarCNPJ(cnpj)) {
        mostrarMensagem("CNPJ inválido.", "erro");
        return;
    }

    // Criando uma nova academia
    const novaAcademia: Academia = { nome, responsavel, cnpj, endereco, login, senha };

    // Salvar a academia no localStorage
    localStorage.setItem("academia", JSON.stringify(novaAcademia));
    mostrarMensagem("Academia cadastrada com sucesso!", "sucesso");

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

    // Limpar os campos do formulário
    (document.getElementById("cadastroAcademiaForm") as HTMLFormElement).reset();
});
