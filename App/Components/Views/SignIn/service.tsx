import * as React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'
import { loginUser } from '@Api'

const useService = (props: StackScreenProps) => {
  const [email, setEmail] = React.useState('guest@example.com')
  const [password, setPassword] = React.useState('guest')
  const [secureEntry, setSecureEntry] = React.useState(true)
  const [error, setError] = React.useState(false)

  function toggleSecureEntry() {
    setSecureEntry(!secureEntry)
  }

  function onContinue() {
    loginUser({ email, password })
      .then(verified => {
        if (verified) {
          console.debug('Navigate to Home')
          setError(false)
          props.navigation.navigate('Home')
        } else {
          // Failed to login
          console.debug('Failed')
          setError(true)
        }
      })
      .catch(() => {
        // Failed to login
        console.debug('Failed')
        setError(true)
      })
  }

  function onSignUp() {
    props.navigation.navigate('SignUp')
  }

  return {
    error,
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
