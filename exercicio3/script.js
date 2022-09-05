const primeiro = [50,15,31,100]
const segundo = ["casa", "hoje", "luz"]
const terceiro = [8, "azul",false]

const primeiroCopia = primeiro.slice()
const segundoCopia = segundo.slice()
const terceiroCopia = terceiro.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
primeiro.push(2022)
console.log(primeiro)
console.log(primeiroCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
segundo.pop()
console.log(segundo)
console.log(segundoCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
terceiro.splice(1,1)
console.log(terceiro)
console.log(terceiroCopia)