class Disciplina {
    constructor(nome, professor) {
        this.nome = nome;
        this.professor = professor;
    }

    apresentar() {
        console.log(`Esta é a disciplina de ${this.nome}, ministrada pelo professor ${this.professor}.`);
    }

    exibirProfessor() {
        console.log(`O professor responsável pela disciplina de ${this.nome} é ${this.professor}.`);
    }
}

const disciplina = new Disciplina("Matemática", "Dr. Silva");
disciplina.apresentar();
disciplina.exibirProfessor();
