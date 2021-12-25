import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, Image, View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'
import { Screen } from '@Templates'
import { Colors } from '@Theme'

const Welcome = (props: StackScreenProps) => {
  const { onContinue } = useService(props)

  const { container, image, heading, caption, button, buttonLabel } =
    useStyles()

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
            Manage your tasks
          </Text>
          <Text w5 p center style={caption}>
            Organize and simplify your tasks and stay up to date
          </Text>
          <Button
            testID="welcome-button-continue"
            style={button}
            labelStyle={buttonLabel}
            onPress={onContinue}>
            Continue
          </Button>
        </View>
      </Screen>
    </>
  )
}

export default Welcome
