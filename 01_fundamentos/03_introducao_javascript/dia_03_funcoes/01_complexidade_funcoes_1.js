function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return "Saque realizado com sucesso. Novo saldo: " + (saldo - valor);
        } else {
            return "Saldo insuficiente. Seu saldo atual é: " + saldo;
        }
    } else {
        return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
    }
}

console.log(sacar(2, 20));