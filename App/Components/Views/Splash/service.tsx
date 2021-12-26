import * as React from 'react'
import { StackScreenProps } from '@Navigation/Stack/types'
import SplashScreen from 'react-native-splash-screen'
import { getCurrentUser } from 'Api'

const useService = (props: StackScreenProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      getCurrentUser().then(user => {
        if (user) {
          props.navigation.replace('Home')
        } else {
          props.navigation.replace('Welcome')
        }
      })
      SplashScreen.hide()
    }, 2000)
  }, [props.navigation])

  return {}
}

export default useService
