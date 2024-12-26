"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrutor = void 0;
class Instrutor {
    constructor(nome, idade, formacaoAcademica) {
        this.nome = nome;
        this.idade = idade;
        this.formacaoAcademica = formacaoAcademica;
    }
    exibirInformacoes() {
        console.log(`
Instrutor: ${this.nome}
Idade: ${this.idade}
Formação: ${this.formacaoAcademica}`);
    }
}
exports.Instrutor = Instrutor;
