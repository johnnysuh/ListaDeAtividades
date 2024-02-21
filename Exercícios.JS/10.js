function MaiordeTres (n1, n2, n3) {
    if (n1 > n2, n3) {
        return 'n1 é maior'
    } else if (n2 > n1, n3) {
        return 'n2 é maior'
    } else if (n3 > n1, n2){
        return 'n3 é maior'
    }
}
let resultado = MaiordeTres (4, 5, 7)
console.log(resultado)