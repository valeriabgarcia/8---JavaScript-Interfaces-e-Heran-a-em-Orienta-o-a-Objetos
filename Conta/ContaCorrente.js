import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia); // saldo inicial, cliente, agencia
        ContaCorrente.numeroDeContas += 1;
    }

    // está sobresvrevendo o método sacar da conta
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
