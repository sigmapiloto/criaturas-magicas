class Criatura {
    #vigor = 100;

    constructor(apelido, feitiço) {
        this.apelido = apelido;
        this.feitiço = feitiço;
    }

    alterarVigor(quantidade) {
        this.#vigor += quantidade;
        console.log(`${this.apelido} agora tem ${this.#vigor} de vigor.`);
    }

    agir() {
        console.log(`${this.apelido} usa ${this.feitiço}!`);
        this.alterarVigor(-10);
    }

    descansar() {
        this.alterarVigor(15);
        console.log(`${this.apelido} descansou. Vigor restaurado!`);
    }
}

module.exports = Criatura;
