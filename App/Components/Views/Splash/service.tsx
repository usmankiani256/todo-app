import * as React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'
import SplashScreen from 'react-native-splash-screen'

const useService = (props: StackScreenProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Welcome')
      SplashScreen.hide()
    }, 2000)
  }, [props.navigation])

  return {}
}

export default useService