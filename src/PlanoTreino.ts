export class PlanoTreino {
    tipo: string;
    descricao: string;
  
    constructor(tipo: string, descricao: string) {
      this.tipo = tipo;
      this.descricao = descricao;
    }
    exibirInformacoesPlan(): void {
      console.log(`
Plano Escolhido: ${this.tipo}
Descrição: ${this.descricao}`);
    }
  }
  