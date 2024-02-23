class Turma {
    constructor(nome, disciplina) {
        this.nome = nome;
        this.disciplina = disciplina; // Agregação
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
        console.log(`${aluno.nome} foi adicionado à turma ${this.nome}.`);
    }
}

class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }
}

class Aluno {
    constructor(nome, idade, sala) {
        this.nome = nome;
        this.idade = idade;
        this.sala = sala;
    }
}

class Professor {
    constructor(nome) {
        this.nome = nome;
    }
}

const matematica = new Disciplina("Matemática");
const joao = new Aluno("João", 15, "9A");
const maria = new Aluno("Maria", 16, "9A");
const professori = new Professor("Prof. Silva");
const turma9A = new Turma("9A", matematica);

turma9A.adicionarAluno(joao);
turma9A.adicionarAluno(maria);
