import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, View, Image, Platform } from 'react-native'
import { Text } from '@Atoms'
import { Button, Input } from '@Molecules'
import { Screen } from '@Templates'
import { Colors } from '@Theme'
import { IconButton } from 'react-native-paper'

const SignUp = (props: StackScreenProps) => {
  const {
    error,
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
  } = useService(props)

  const {
    container,
    backContainer,
    image,
    heading,
    caption,
    inputContainer,
    signUp,
    signUpLabel,
    signIn,
  } = useStyles()

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.foreground}
      />
      <Screen scrollEnabled={false}>
        <View style={container}>
          <View style={backContainer}>
            <IconButton
              icon={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
              color={Colors.text}
              size={25}
              onPress={onSignIn}
            />
          </View>
          <Image
            style={image}
            resizeMethod="resize"
            resizeMode="contain"
            source={require('@Images/logo.png')}
          />
          <Text w3 h4 center style={heading}>
            Sign Up
          </Text>
          <Text w5 p center style={caption}>
            Create an account and start using the application
          </Text>

          <View style={inputContainer}>
            <Input
              label="Full Name"
              value={username}
              onChangeText={setUsername}
              placeholder="John Doe"
            />
            <Input
              label="Email Address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholder="Johndoe@gmail.com"
            />
            <Input
              label="Password"
              secureTextEntry={secureEntry}
              value={password}
              onChangeText={setPassword}
              placeholder="*********"
              rightIcon={secureEntry ? 'eye-off' : 'eye'}
              onRightPress={toggleSecureEntry}
              errorMessage={error && 'All fields are required'}
            />
          </View>
          <Button
            testID="sign-up-button-create"
            onPress={onCreateAccount}
            style={signUp}
            labelStyle={signUpLabel}
            uppercase={false}>
            Create an account
          </Button>
          <Button
            testID="sign-up-button-signin"
            style={signIn}
            labelStyle={caption}
            mode="text"
            onPress={onSignIn}
            uppercase={false}>
            Already have an account? Sign in
          </Button>
        </View>
      </Screen>
    </>
  )
}

export default SignUp
