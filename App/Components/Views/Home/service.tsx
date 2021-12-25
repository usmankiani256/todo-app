import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'

const useService = (props: StackScreenProps) => {
  function onContinue() {
    props.navigation.navigate('SignIn')
  }

  return { onContinue }
}

export default useService
