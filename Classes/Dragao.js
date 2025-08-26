const Criatura = require("./Criatura");

class Dragao extends Criatura {
    constructor(apelido) {
        super(apelido, "Sopro de Fogo Infernal");
    }

    agir() {
        console.log(`${this.apelido} lança ${this.feitiço}!`);
        this.alterarVigor(-30);
    }
}

module.exports = Dragao;
