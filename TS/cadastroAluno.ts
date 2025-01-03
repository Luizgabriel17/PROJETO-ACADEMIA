// Interface para representar uma academia
interface Aluno {
    nome: string;
    idade: string;
    cpf: string; // Ajustado para string, pois o CNPJ contém 14 dígitos
    login: string;
    senha: string;
}

// Função para validar o CNPJ
function validarCNPJ1(cnpj: string): boolean {
    const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14; // Validação básica
}

// Função para mostrar mensagens
function mostrarMensagem2(mensagem1: string, tipo: "sucesso" | "erro"): void {
    alert(`${tipo.toUpperCase()}: ${mensagem1}`);
}

// Evento para lidar com o envio do formulário
document.getElementById("cadastroAlunosform")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = (document.getElementById("nomeAluno") as HTMLInputElement).value.trim();
    const idade = (document.getElementById("idade") as HTMLInputElement).value.trim();
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value.trim();
    const login = (document.getElementById("login") as HTMLInputElement).value.trim();
    const senha = (document.getElementById("senha") as HTMLInputElement).value.trim();

    // Validação dos campos
    if (!nome || !idade || !cpf ||!login || !senha) {
        mostrarMensagem1("Por favor, preencha todos os campos.", "erro");
        return;
    }

    if (!validarCNPJ(cpf)) {
        mostrarMensagem1("CPF inválido.", "erro");
        return;
    }

    // Criando uma nova academia
    const novoAluno: Aluno = { nome, idade, cpf, login, senha };

    // Salvar a academia no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    mostrarMensagem1("Aluno cadastrado com sucesso!", "sucesso");

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);

    // Limpar os campos do formulário
    (document.getElementById("cadastroAlunoform") as HTMLFormElement).reset();
});
