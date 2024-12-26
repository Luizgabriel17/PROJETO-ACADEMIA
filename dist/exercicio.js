"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercício = void 0;
class Exercício {
    constructor(nome, funcao, repeticoes) {
        this.nome = nome;
        this.funcao = funcao;
        this.repeticoes = repeticoes;
    }
    exibirInformacoesExerc() {
        console.log(`
Exercício: ${this.nome}
Função: ${this.funcao}
Repetições: ${this.repeticoes}`);
    }
}
exports.Exercício = Exercício;
