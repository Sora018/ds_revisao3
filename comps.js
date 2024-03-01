class Aluno {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Turma {
    constructor(nome) {
      this.nome = `Turma: ${nome}`;
      this.alunos = [];
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
    }
  }
  
  class Escola {
    constructor(nome) {
      this.nome = `Escola: ${nome}`;
      this.turmas = [];
    }
  
    adicionarTurma(turma) {
      this.turmas.push(turma);
    }
  }
  
  const aluno1 = new Aluno('Marcelo');
  const aluno2 = new Aluno('Maria');
  
  const turma = new Turma('A');
  turma.adicionarAluno(aluno1);
  turma.adicionarAluno(aluno2);
  
  const minhaEscola = new Escola('Filomena');
  minhaEscola.adicionarTurma(turma);
  
  console.log(minhaEscola.nome);
  minhaEscola.turmas.forEach(turma => {
    console.log(turma.nome);
  });  