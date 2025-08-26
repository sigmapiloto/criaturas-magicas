const Criatura = require("./Criatura");

class Cthulhu extends Criatura {
    constructor(nome) {
        super(nome, "Terror Cósmico Abissal");
    }

    agir() {
        console.log(`${this.nome} evoca o ${this.ataqueMagico}, causando loucura e destruição!`);
        this.alterarEnergia(-50);
    }
}

module.exports = Cthulhu;
