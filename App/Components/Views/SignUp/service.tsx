import * as React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'

const useService = (props: StackScreenProps) => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [secureEntry, setSecureEntry] = React.useState(true)

  function toggleSecureEntry() {
    setSecureEntry(!secureEntry)
  }

  function onCreateAccount() {}

  function onSignIn() {
    props.navigation.navigate('SignIn')
  }

  return {
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
