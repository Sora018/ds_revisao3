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
            console.log(`${this.nome} tem ${this._idade} anos.`);
        } else {
            console.error('A idade deve ser um número positivo.');
        }
    }
}

const estudante = new Estudante("João", 20);

estudante.idade = 25;
estudante.idade = -5;
