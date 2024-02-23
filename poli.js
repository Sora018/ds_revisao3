class Professor {
    constructor(nome) {
        this.nome = nome;
    }

    ensinar() {
        console.log(`${this.nome} está ensinando.`);
    }
}
const professor = new Professor("Robert");

professor.ensinar();