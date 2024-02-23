class Turma {
    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
        console.log(`${aluno.nome} foi adicionado à turma ${this.nome}.`);
    }
}

class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
}

const joao = new Aluno("João");
const maria = new Aluno("Maria");
const turma9A = new Turma("9A");

turma9A.adicionarAluno(joao);
turma9A.adicionarAluno(maria);
