/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'
let idade: number = 0b1010
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n

// Arrays
let arrayDeNumeros: number[] = [1,2,3]
let arrayDeStrings: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Eduardo',
    idade: 26,
    adulto: true
}

// Funcoes
const soma = (x: number, y: number): number => {
    return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => {
    return x + y
}

console.log(soma2(2,2))
