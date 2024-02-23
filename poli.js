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
  
  class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }
  }
  
  const estudante = new Estudante("Ana", 18, "3ºB");
  const professor = new Professor("Rubens", 35, "História");
  
  console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}, turma: ${estudante.turma}`);
  console.log(`Nome: ${professor.nome}, idade: ${professor.idade}, disciplina: ${professor.disciplina}`);
