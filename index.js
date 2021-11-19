import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Valeria", 1112223309);
const cliente2 = new Cliente("Ana", 8882223309);
const cliente3 = new Cliente("Joao", 9992225509);

const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
ContaCorrente1.depositar(800);
ContaCorrente1.sacar(300);
console.log(ContaCorrente1);
console.log("O numero de CC é: " + ContaCorrente.numeroDeContas);

const ContaPoupanca1 = new ContaPoupanca(0, cliente2, 1001);
ContaCorrente1.transferir(100, ContaPoupanca1);
ContaPoupanca1.sacar(10);
console.log(ContaPoupanca1);

const ContaSalario1 = new ContaSalario(cliente3)
ContaSalario1.depositar(600);
console.log(ContaSalario1);





