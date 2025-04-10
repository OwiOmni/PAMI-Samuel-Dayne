function ExibirMsg (msg) {
    console.log(msg)
}

ExibirMsg ("Oi Cleros Oi Putas")
ExibirMsg("Estou com gastrite")
ExibirMsg("Calma toscanetos")

function soma (n1, n2) 
{
    return n1 + n2
}
console.log(soma(2,7))

const Potencia = (n, p) => 
{
    return Math.pow(n, p)
}

conmsole.log(Potencia(4, 2))

const Media =(nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2

    if (NotaFinal < 4.00)
 {
    return "Reprovado"
 }
 if (NotaFinal > 6.00) {
    return "Aprovadoo"
 }

 return "Recuperação"

}

console.log(Media(5, 2))