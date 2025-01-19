window.onload = () => {
    // Recupera os dados do aluno e da academia no LocalStorage
    const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
    const academia = JSON.parse(localStorage.getItem("academia") || "{}");

    // Exibe as informações do aluno e da academia na página
    const nomeAlunoElement = document.getElementById("nomeAluno") as HTMLSpanElement;
    const nomeAcademiaElement = document.getElementById("nomeAcademia") as HTMLSpanElement;
    const enderecoAcademiaElement = document.getElementById("enderecoAcademia") as HTMLSpanElement;
    const contatoAcademiaElement = document.getElementById("contatoAcademia") as HTMLSpanElement;

    // Preenche os campos na página com os dados do aluno e da academia
    if (aluno && aluno.nome) {
        nomeAlunoElement.textContent = aluno.nome;
    } else {
        nomeAlunoElement.textContent = "Aluno não encontrado";
    }

    if (academia && academia.nome) {
        nomeAcademiaElement.textContent = academia.nome;
    } else {
        nomeAcademiaElement.textContent = "Academia não encontrada";
    }

    if (academia && academia.endereco) {
        enderecoAcademiaElement.textContent = academia.endereco;
    } else {
        enderecoAcademiaElement.textContent = "Endereço não disponível";
    }
};
