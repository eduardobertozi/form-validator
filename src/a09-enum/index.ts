enum Cores {
    vermelho,
    azul,
    amarelo,
}

export function escolhaCor(cor: Cores): void {
    console.log(Cores[cor])
}

// escolhaCor(Cores.fuscia) // A desvantagem de enums é o retorno undefined
