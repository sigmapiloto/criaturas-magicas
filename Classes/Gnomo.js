const Criatura = require("./Criatura");

class Gnomo extends Criatura {
    constructor(titulo) {
        super(titulo, "Chuva de Cogumelos Tóxicos");
    }

    agir() {
        console.log(`${this.titulo} invoca ${this.poderArcano}!`);
        this.modificarVitalidade(-5);
    }
}

module.exports = Gnomo;
