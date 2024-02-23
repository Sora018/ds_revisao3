class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

class Estudante extends Pessoa {
    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
}

class Professor extends Pessoa {
    ensinar() {
        console.log(`${this.nome} está ensinando.`);
    }
}

const estudante = new Estudante("Maria");
const professor = new Professor("Robert");

estudante.estudar();
professor.ensinar();
