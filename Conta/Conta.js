import { Cliente } from "../Cliente.js";

// a classe Conta é abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Método Abstrato
    sacar(valor) {
        throw new Error("O método Sacar de Conta é abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            // console.log(this._saldo);
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            // console.log(this._saldo);
            return valor;
        }
    }

    transferir(valor, conta) {
        let taxa = 1;
        const valorSacado = this._sacar(valor, taxa);
        conta.depositar(valorSacado);
    }
}