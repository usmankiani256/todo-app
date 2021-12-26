import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Splash: any
  Welcome: any
  SignIn: any
  SignUp: any
  Home: any
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>
