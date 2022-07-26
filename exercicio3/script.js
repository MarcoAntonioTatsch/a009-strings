const frase = `\"Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair\"`
console.log(frase)

const novaFrase = frase.replace("verde", "rosa")
const novaFrase2 = novaFrase.replace("azul", "laranja")

console.log(novaFrase2)

novaFrase2.includes("verde")
novaFrase2.includes("laranja")

console.log(`A nova frase contém a palavra verde? ${novaFrase2.includes("verde")}`)

console.log(`A nova frase contém a palavra laranja? ${novaFrase2.includes("laranja")}`)

const novaFrase3 = "Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS"
const novaFrase4 = " mas não deixe o gato sair"
const novaFrase5 = novaFrase4.toUpperCase()

console.log(novaFrase3 + novaFrase5)