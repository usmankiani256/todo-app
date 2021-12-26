import { setCurrentUser, getCurrentUser } from './index'

const user = {
  id: 9,
  name: 'Usman',
  email: 'test@user.com',
  password: 'test',
}

describe('Current User API', () => {
  it('returns null if no user', async () => {
    return getCurrentUser().then(u => {
      expect(u).toBe(null)
    })
  })

  it('sets current user', async () => {
    return setCurrentUser(user).then(u => {
      expect(user).toStrictEqual(u)
    })
  })

  it('retrieves current user', async () => {
    return getCurrentUser().then(u => {
      expect(user).toStrictEqual(u)
    })
  })
})
