"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoTreino = void 0;
class PlanoTreino {
    constructor(tipo, descricao) {
        this.tipo = tipo;
        this.descricao = descricao;
    }
    exibirInformacoesPlan() {
        console.log(`
Plano Escolhido: ${this.tipo}
Descrição: ${this.descricao}`);
    }
}
exports.PlanoTreino = PlanoTreino;
