// O que importa são as restrições do tipo
type User = {
    username: string
    password: string
}

type VerifyUserFn = (user: User, sentValue: User) => boolean

const verifyUser: VerifyUserFn = (user, sentValue) =>
    user.username === sentValue.username && user.password === sentValue.password

const bdUser = { username: 'joao', password: '123456' }
const sentUser = { username: 'joao2', password: '123456' }
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)
