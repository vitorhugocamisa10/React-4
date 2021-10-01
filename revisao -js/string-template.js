let nome = 'vitor'
let idade = 21
let cidade = 'Franca / SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' +cidade+ '.')

// Usando string template - strings delimitadas por ` (acentos grave ou "crases")
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)

// String template só funciona quando delimitado por ``
console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)