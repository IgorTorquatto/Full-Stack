var person = {
    firstName : "Penelope",
    lastName  : "Barrymore",
    fullName  : function() {
        // Notou o uso do "this" tal como se usou "ele" no exemplo da frase anterior?
        console.log( this.firstName + ' ' + this.lastName );
 
        // Também poderia se ter escrito:
        console.log( person.firstName + ' ' + person.lastName );
    }
}