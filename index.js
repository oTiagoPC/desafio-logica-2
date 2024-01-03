function calculaSaldoERank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let valores = [10, 20, 50, 80, 90, 100, Infinity];
    let niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']

    for (i = 0; i < niveis.length; i++) {
        if (saldoVitorias <= valores[i]) {
            return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${niveis[i]}`;
            break;
        }
    }
}

let resultado = calculaSaldoERank(109, 57);

console.log(resultado);