const primeiro = [50,15,31,100]
const segundo = ["casa", "hoje", "luz"]
const terceiro = [8, "azul",false]

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)
console.log("Length:", primeiro.length)
console.log("Length:", segundo.length)
console.log("Length:", terceiro.length)

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
console.log("Primeiro item:", primeiro[0])
console.log("Segundo item:", segundo[1])
console.log("Terceiro item:", terceiro[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.
console.log("Contem 100?", primeiro.includes(100))
console.log("Contem true?", terceiro.includes(true))