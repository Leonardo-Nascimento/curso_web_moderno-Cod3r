//Arrow Function

const soma = (a, b) => a + b

console.log(soma(2,3))

//Arrow Function (this)

const lexico1 = () => console.log(this === exports)
lexico1()

const lexico2 = lexico1.bind({})
lexico2()

//parametro defaut
function log(texto = 'Node'){
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Sou mais forte')

//operador rest
//operador q vai agrupar em um array as propriedades passadas

function total(...numeros){
    let total = 0
    numeros.forEach( n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))


