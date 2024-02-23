class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Esta é a disciplina de ${this.nome}.`);
    }
}

const disciplina = new Disciplina("Matemática");

disciplina.apresentar();
