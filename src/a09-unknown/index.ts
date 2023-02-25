let x: unknown // Usar no lugar de any, para que o ts lembre de checar o tipo

x = 100
x = 'Luiz'
x = false
const y = 900

if (typeof x === 'number') console.log(x + y)
