function fatorial (n) {
    for(var i=n-1; i>1; i--) {
        n*=i
    }
    console.log (n)
}
fatorial(10)