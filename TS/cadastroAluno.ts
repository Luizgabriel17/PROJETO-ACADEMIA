// Interface para representar um aluno
interface Aluno {
    nome: string;
    idade: string;
    cpf: string;
    login: string;
    senha: string;
    academia: string;  // Adiciona um campo para a academia do aluno
}

// Função para validar o CPF
function validarCPF(cpf: string): boolean {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    return cpfLimpo.length === 11; // Validação básica
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem: string, tipo: "sucesso" | "erro"): void {
    alert(`${tipo.toUpperCase()}: ${mensagem}`);
}
// Exemplo de como armazenar academias no localStorage
const academias = ["Academia 1", "Academia 2", "Academia 3"];
localStorage.setItem("academias", JSON.stringify(academias));  // Armazenando como um array de strings


// Função para carregar academias cadastradas no select
function carregarAcademias() {
    const academiaSelect = document.getElementById("academia") as HTMLSelectElement;
    
    // Verificar se há academias no localStorage
    const academias = JSON.parse(localStorage.getItem("academias") || "[]");

    // Preencher o select com as academias
    if (academias.length > 0) {
        academias.forEach((academia: string) => {
            const option = document.createElement("option");
            option.value = academia;  // Usando o nome da academia como valor
            option.textContent = academia;  // Usando o nome da academia como texto visível
            academiaSelect.appendChild(option);
        });
    } else {
        // Se não houver academias cadastradas, adicionar uma opção de aviso
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhuma academia cadastrada";
        academiaSelect.appendChild(option);
    }
}

// Evento para lidar com o envio do formulário
document.getElementById("cadastroAlunosform")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = (document.getElementById("nomeAluno") as HTMLInputElement).value.trim();
    const idade = (document.getElementById("idade") as HTMLInputElement).value.trim();
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value.trim();
    const login = (document.getElementById("login") as HTMLInputElement).value.trim();
    const senha = (document.getElementById("senha") as HTMLInputElement).value.trim();
    const academia = (document.getElementById("academia") as HTMLSelectElement).value;

    // Validação dos campos
    if (!nome || !idade || !cpf || !login || !senha || !academia) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }

    if (!validarCPF(cpf)) {
        mostrarMensagem("CPF inválido.", "erro");
        return;
    }

    // Criando um novo aluno
    const novoAluno: Aluno = { nome, idade, cpf, login, senha, academia };

    // Salvar o aluno no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    mostrarMensagem("Aluno cadastrado com sucesso!", "sucesso");

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = "acesso-aluno.html";
    }, 2000);

    // Limpar os campos do formulário
    (document.getElementById("cadastroAlunosform") as HTMLFormElement).reset();
});

// Carregar academias quando a página for carregada
document.addEventListener("DOMContentLoaded", carregarAcademias);