function PosNegZero (n) {
    if (n > 0) {
        return 'Positivo'
    } else if (n < 0) {
        return 'Negativo'
    } else {
        return 'Zero'
    }
}
let resultado = PosNegZero (0)
console.log(resultado)