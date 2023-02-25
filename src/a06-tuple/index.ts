const dadosCliente: readonly [number, string] = [1, 'Luiz']
const dadosCliente2: [number, string, string?] = [20, 'Joana', 'Opcional']
const dadosCliente3: [number, string, ...string[]] = [20, 'A', 'B', 'C', 'D']

// dadosCliente[0] = 100
// dadosCliente[1] = 'Maria'
// dadosCliente.pop()

console.log(dadosCliente)
console.log(dadosCliente2)
console.log(dadosCliente3)
