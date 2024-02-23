class Estudante {
    constructor(nome, idade) {
        this.nome = nome;
        this._idade = idade;
    }
     
    get idade() {
        return this._idade;
    }
     
    set idade(novaIdade) {
        if (novaIdade > 0) {
            this._idade = novaIdade;
        } else {
            console.error('A idade deve ser um número positivo.');
        }
    }
     
    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
}

const estudante = new Estudante("João", 20);
estudante.estudar(); // Chama o método estudar() para imprimir a mensagem
