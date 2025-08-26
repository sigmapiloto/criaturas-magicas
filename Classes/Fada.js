const Criatura = require("./Criatura");

class Fada extends Criatura {
    constructor(titulo) {
        super(titulo, "Bola de Luz Arco-Íris");
    }

    agir() {
        console.log(`${this.titulo} ataca com ${this.poderArcano}!`);
        this.modificarVitalidade(-15);
    }
}

module.exports = Fada;

