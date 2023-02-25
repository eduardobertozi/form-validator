function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

export const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    },
}

semRetorno('a', 'b', 'c', 'd')
pessoa.exibirNome()
