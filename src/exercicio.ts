export class Exercício {
  nome: string;
  funcao: string;
  repeticoes: string
  constructor(nome: string, funcao: string, repeticoes: string) {
    this.nome = nome;
    this.funcao = funcao;
    this.repeticoes = repeticoes
  }

  exibirInformacoesExerc(): void {
    console.log(`
Exercício: ${this.nome}
Função: ${this.funcao}
Repetições: ${this.repeticoes}`);
  }
}