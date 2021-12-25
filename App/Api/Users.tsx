import Async from 'Store/Async'

export interface User {
  id?: number
  name: string
  email: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}

export const DefaultUser: User = {
  id: 1,
  name: 'Guest',
  email: 'guest@example.com',
  password: 'guest',
}

async function getUsers(): Promise<User[]> {
  try {
    const response = await Async.getItem(Async.Item.Users)

    if (response === null) {
      return [DefaultUser]
    }
    return [DefaultUser, ...response]
  } catch (e) {
    return [DefaultUser]
  }
}

async function createUser(user: User) {
  try {
    const users = await getUsers()

    const lastId = users[users.length - 1].id

    if (lastId) {
      await Async.setItem(Async.Item.Users, [
        ...users,
        { ...user, id: lastId + 1 },
      ])
      console.debug('User Created', user.name)
    }
  } catch (e: any) {}
}

async function loginUser(login: LoginData): Promise<boolean | undefined> {
  try {
    const users = await getUsers()

    const verified =
      users.filter(
        user => user.email === login.email && user.password === login.password,
      ).length > 0

    if (verified) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export { getUsers, createUser, loginUser }
