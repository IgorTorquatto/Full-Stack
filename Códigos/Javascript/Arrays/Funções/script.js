//Push(Insere no Final):
let nomes=["Pedro","Juvenal","Carlitos","Obama"]
nomes.push("Goku")
console.log(nomes);

//unshift(Insere no Início):
nomes.unshift("Light")
console.log(nomes);

//Pop(Remove no Final):
let removido=nomes.pop()
console.log(removido)
console.log(nomes)

//Shift(Remove no Início):
nomes.shift()
console.log(nomes)

//Length(Tamanho):
console.log(nomes.length);

//indexOf(Índice de um valor) Obs: Se não encontra retorna -1
console.log(nomes.indexOf("Carlitos"));