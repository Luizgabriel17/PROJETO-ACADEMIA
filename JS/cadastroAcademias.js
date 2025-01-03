var _a;
// Função para validar o CNPJ
function validarCNPJ(cnpj) {
    var cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14; // Validação básica
}
// Função para mostrar mensagens
function mostrarMensagem(mensagem, tipo) {
    alert("".concat(tipo.toUpperCase(), ": ").concat(mensagem));
}
// Evento para lidar com o envio do formulário
(_a = document.getElementById("cadastroAcademiaForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("nomeAcademia").value.trim();
    var responsavel = document.getElementById("responsavel").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var endereco = document.getElementById("endereco").value.trim();
    var login = document.getElementById("login").value.trim();
    var senha = document.getElementById("senha").value.trim();
    // Validação dos campos
    if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }
    function validarCNPJ(cnpj) {
        // Remove qualquer caractere não numérico
        var cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    
        // Verifica se o CNPJ tem exatamente 14 dígitos
        if (cnpjLimpo.length !== 14) {
            return false;
        }
    
        // Aqui você pode adicionar uma validação mais detalhada, se necessário
        // (Validação do dígito verificador, etc.)
    
        return true;
    }
    
    // Criando uma nova academia
    var novaAcademia = { nome: nome, responsavel: responsavel, cnpj: cnpj, endereco: endereco, login: login, senha: senha };
    // Salvar a academia no localStorage
    localStorage.setItem("academia", JSON.stringify(novaAcademia));
    mostrarMensagem("Academia cadastrada com sucesso!", "sucesso");
    // Redirecionar para a página de login após 2 segundos
    setTimeout(function () {
        window.location.href = "login.html";
    }, 2000);
    // Limpar os campos do formulário
    document.getElementById("cadastroAcademiaForm").reset();
});
