export class Aluno {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  exibirInformacoes(): void {
    console.log(`
Aluno: ${this.nome}
Idade: ${this.idade}`);
    }
  }