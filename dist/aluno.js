"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibirInformacoes() {
        console.log(`
Aluno: ${this.nome}
Idade: ${this.idade}`);
    }
}
exports.Aluno = Aluno;
