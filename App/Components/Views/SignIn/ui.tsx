import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, View, Image } from 'react-native'
import { Text } from '@Atoms'
import { Button, Input } from '@Molecules'
import { Screen } from '@Templates'
import { Colors } from '@Theme'

const SignIn = (props: StackScreenProps) => {
  const {
    error,
    email,
    setEmail,
    password,
    setPassword,
    secureEntry,
    toggleSecureEntry,
    onContinue,
    onSignUp,
  } = useService(props)

  const {
    container,
    image,
    heading,
    caption,
    inputContainer,
    signIn,
    signInLabel,
    signUp,
  } = useStyles()

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.foreground}
      />
      <Screen scrollEnabled={false}>
        <View style={container}>
          <Image
            style={image}
            resizeMethod="resize"
            resizeMode="contain"
            source={require('@Images/logo.png')}
          />
          <Text w3 h4 center style={heading}>
            Welcome back!
          </Text>
          <Text w5 p center style={caption}>
            Sign in to your account
          </Text>

          <View style={inputContainer}>
            <Input
              testID="input-email-signin"
              label="Email Address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholder="Johndoe@gmail.com"
            />
            <Input
              testID="input-password-signin"
              label="Password"
              secureTextEntry={secureEntry}
              value={password}
              onChangeText={setPassword}
              placeholder="*********"
              rightIcon={secureEntry ? 'eye-off' : 'eye'}
              onRightPress={toggleSecureEntry}
              errorMessage={error && 'Invalid username or password'}
            />
          </View>
          <Button
            testID="signin-button-continue"
            onPress={onContinue}
            style={signIn}
            labelStyle={signInLabel}
            uppercase={false}>
            Continue
          </Button>
          <Button
            testID="signin-button-sign-up"
            style={signUp}
            labelStyle={caption}
            mode="text"
            onPress={onSignUp}
            uppercase={false}>
            Don't have an account? Sign up
          </Button>
        </View>
      </Screen>
    </>
  )
}

export default SignIn
