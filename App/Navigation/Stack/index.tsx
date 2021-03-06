import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useStyles from './styles'
import { RootStackParamList } from './types'
import {
  SplashScreen,
  WelcomeScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
} from '@Views'
import { Appbar } from '@Organisms'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator: React.FC = () => {
  const { headerHidden } = useStyles()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          header: props => <Appbar {...props} />,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          {...headerHidden}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          {...headerHidden}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          {...headerHidden}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          {...headerHidden}
        />
        <Stack.Screen name="Home" component={HomeScreen} {...headerHidden} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
