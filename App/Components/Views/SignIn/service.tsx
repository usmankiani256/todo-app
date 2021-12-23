import * as React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'

const useService = (props: StackScreenProps) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [secureEntry, setSecureEntry] = React.useState(true)

  function toggleSecureEntry() {
    setSecureEntry(!secureEntry)
  }

  function onContinue() {}

  function onSignUp() {
    props.navigation.navigate('SignUp')
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    secureEntry,
    toggleSecureEntry,
    onContinue,
    onSignUp,
  }
}

export default useService
