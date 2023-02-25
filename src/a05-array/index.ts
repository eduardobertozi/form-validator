// Array<T> - T[]
export function multiplicaArgs(...args: number[]): number {
    return args.reduce((acum, valor) => acum * valor, 1)
}

export function concatenaStrings(...args: string[]): string {
    return args.reduce((acum, valor) => acum + valor)
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase())
}

console.log(multiplicaArgs(3, 5, 10))

const concatenacao = concatenaStrings('a', 'b', 'c')
console.log(concatenacao)

const upper = toUpperCase('a', 'b', 'c')
console.log(upper)
