import * as React from 'react'
import { StackScreenProps } from '@Navigation/Stack/types'
import { createUser } from '@Api'

const useService = (props: StackScreenProps) => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [secureEntry, setSecureEntry] = React.useState(true)
  const [error, setError] = React.useState(false)

  function toggleSecureEntry() {
    setSecureEntry(!secureEntry)
  }

  function onCreateAccount() {
    if (email.length > 0 && password.length > 0 && username.length > 0) {
      const user = {
        name: username,
        email,
        password,
      }

      createUser(user).then(() => {
        props.navigation.navigate('SignIn', { email })
        setError(false)
      })
    } else {
      setError(true)
    }
  }

  function onSignIn() {
    props.navigation.navigate('SignIn')
  }

  return {
    error,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    secureEntry,
    toggleSecureEntry,
    onCreateAccount,
    onSignIn,
  }
}

export default useService
