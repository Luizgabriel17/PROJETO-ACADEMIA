export class Instrutor {
  nome: string;
  idade: number;
  formacaoAcademica: string;

  constructor(nome: string, idade: number, formacaoAcademica: string) {
    this.nome = nome;
    this.idade = idade;
    this.formacaoAcademica = formacaoAcademica;
  }

  exibirInformacoes(): void {
    console.log(`
Instrutor: ${this.nome}
Idade: ${this.idade}
Formação: ${this.formacaoAcademica}`);
  }
}