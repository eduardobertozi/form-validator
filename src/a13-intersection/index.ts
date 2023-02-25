type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade

// type AB = 'A' | 'B'
// type AC = 'A' | 'C'
// type AD = 'A' | 'D'
// type Intersecao = AB & AC

const pessoa: Pessoa = {
    idade: 26,
    nome: 'Eduardo',
    sobrenome: 'Bertozi',
}

export { pessoa }
