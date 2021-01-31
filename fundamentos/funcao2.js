//Armazenando uma função em uma variavel

const imprimirsoma = function (a, b){
    console.log(a + b);
}

imprimirsoma(2,3);


//Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,3));

//Retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));