"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("./aluno");
// Lista de alunos com status de aula
const alunos = [];
// Adicionar um aluno
function adicionarAluno(aluno) {
    alunos.push({ aluno, aulaFinalizada: false });
    console.log(`Aluno ${aluno.nome} adicionado com status: Aula não iniciada.`);
}
// Finalizar a aula de um aluno
function finalizarAula(nome) {
    const registro = alunos.find(a => a.aluno.nome === nome);
    if (registro) {
        registro.aulaFinalizada = true;
        console.log(`Aula do aluno ${nome} finalizada.`);
    }
    else {
        console.log(`Aluno ${nome} não finalizou a aula.`);
    }
}
// Verificar status da aula
function verificarAula(nome) {
    const registro = alunos.find(a => a.aluno.nome === nome);
    if (registro) {
        const status = registro.aulaFinalizada ? "Finalizada" : "Não finalizada";
        console.log(`A aula do aluno ${nome} está: ${status}.`);
    }
    else {
        console.log(`Aluno ${nome} não encontrado.`);
    }
}
// Criando e gerenciando os alunos
const aluno1 = new aluno_1.Aluno("Luiz Henrique", 16);
const aluno2 = new aluno_1.Aluno("Dudu Pressão", 16);
const aluno3 = new aluno_1.Aluno("Tchuca", 15);
const aluno4 = new aluno_1.Aluno("Divino", 18);
adicionarAluno(aluno1);
adicionarAluno(aluno2);
adicionarAluno(aluno3);
adicionarAluno(aluno4);
verificarAula("Luiz Henrique"); // Aula não finalizada
finalizarAula("Luiz Henrique"); // Aula finalizada
verificarAula("Divino"); // Aula finalizada
verificarAula("Tchuca"); // Aula não finalizada
finalizarAula("Divino");
finalizarAula("Tchuca");
verificarAula("Dudu Pressão");
finalizarAula("Dudu Pressão");
