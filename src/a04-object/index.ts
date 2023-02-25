//            Record<string, unknown>
const objetoA: {
    readonly chaveA: string
    readonly chaveB: string
    chaveC?: string
    [key: string]: unknown
} = {
    chaveA: 'valorA',
    chaveB: 'valorB',
}

console.log(objetoA)
