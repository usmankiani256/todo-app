import Async from 'Store/Async'

export interface User {
  id?: number
  name: string
  email: string
  password: string
}

async function getCurrentUser(): Promise<User | null> {
  try {
    return await Async.getItem(Async.Item.CurrentUser)
  } catch (e) {
    return null
  }
}

async function setCurrentUser(user: User | any) {
  try {
    await Async.setItem(Async.Item.CurrentUser, user)
  } catch (e) {}
}

export { getCurrentUser, setCurrentUser }
