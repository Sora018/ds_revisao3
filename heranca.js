class Pessoa {
  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, turma) {
      super(nome, idade);
      this.turma = turma;
  }
}

const estudante = new Estudante("Maria", 18, "3ºA");

console.log(`Estudante: nome = ${estudante.nome}, idade = ${estudante.idade}, turma = ${estudante.turma}`);
