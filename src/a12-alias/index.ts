type Age = number

type ColorRGB = 'Red' | 'Green' | 'Blue'
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black'
type PreferColor = ColorRGB | ColorCMYK

type Pessoa = {
    name: string
    lastName: string
    age: Age
    salary: number
    preferColor?: PreferColor
}

const person: Pessoa = {
    name: 'Eduardo',
    lastName: 'Bertozi',
    age: 26,
    salary: 200_000, // 200.000 posso usar pra facilitar a leitura
}

export function setPreferColor(person: Pessoa, color: PreferColor): Pessoa {
    return {
        ...person,
        preferColor: color,
    }
}

setPreferColor(person, 'Black')

console.log(person)
