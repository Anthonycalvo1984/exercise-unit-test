
// app.js file content
//console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDolarIs = {
    "JPY": 134, // japan yen
    "EUR": 1.2, // eur dollar
    "GBP": 0.0062, // british pound
}

let oneYenIs = {
    "USD": 0.0075, // us dolar
    "EUR": 0.0070, // eur dollar
    "GBP": 0.83, // british pound
}

const fromEuroToDollar = (euro) =>{
    let resultado = euro * oneEuroIs ["USD"]
    return resultado

}

const fromDollarToYen = (dolar) =>{
    let resultado = dolar * oneDolarIs ["JPY"]
    return resultado 

}

const fromYenToPound = (Yen) =>{
    let resultado = Yen * oneYenIs ["GBP"]
    return resultado 

}

//solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
