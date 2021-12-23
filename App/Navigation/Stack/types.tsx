import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Splash: undefined
  Welcome: undefined
  SignIn: undefined
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>
