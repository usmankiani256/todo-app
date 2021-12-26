import Async from 'Store/Async'

export interface User {
  id?: number
  name: string
  email: string
  password: string
}

async function getCurrentUser(): Promise<User | null> {
  return await Async.getItem(Async.Item.CurrentUser)
}

async function setCurrentUser(user: User | any) {
  await Async.setItem(Async.Item.CurrentUser, user)
  return user
}

export { getCurrentUser, setCurrentUser }
