function primo (n) {
    var count = 1
  for(var i=n; i>1; i--) {
    if (n%i==0) {
        count ++
    }
  }
  if(count==2) {
    console.log(`${n} é primo`)
  } else {
    console.log(`${n} não é primo`)
  }
}
primo(5)