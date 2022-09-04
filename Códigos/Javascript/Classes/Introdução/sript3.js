//Type pré-definido:
class SpacialStation{
    constructor(nome,tipo="Batalha"){
        //Os parâmetros podem ter nomes diferentes do que é declarado no this. desde que relacionemos de forma correta a variável criada com o this e o parâmetro original.
        this.name=nome
        this.type=tipo
    }
}

let nave1= new SpacialStation("Apolo","Exploração")
let nave2= new SpacialStation("Guerreira")

console.log(nave1);
console.log(nave2);
/*
Vai imprimir os objetos:
SpacialStation { name: 'Apolo', type: 'Exploração' }
SpacialStation { name: 'Guerreira', type: 'Batalha' }
*/