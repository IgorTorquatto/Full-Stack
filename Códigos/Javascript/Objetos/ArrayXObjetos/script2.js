//Lembrando que a função forEach é usada para percorrer arrays

//Array com três objetos:
let pessoas=[
    {nome: "Ana", idade:24},
    {nome: "Bernardo", idade:35},
    {nome: "Carlos", idade:27}
]

//Vai percorrer a variável "pessoas" e cria dentro da função forEach uma nova variável que será a que conterá os dados depois de perccorer.
//Portanto, usamos essa variável "pessoa" criada dentro da função para termos acesso aos valores.
pessoas.forEach(pessoa=>{
    alert(pessoa.nome+ " tem "+ pessoa.idade+ " anos ")
})