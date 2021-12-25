import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, Image, View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'
import { Screen } from '@Templates'
import { Colors } from '@Theme'

const Home = (props: StackScreenProps) => {
  const { onContinue } = useService(props)

  const { container, heading, caption } = useStyles()

  return (
    <Screen>
      <View style={container}>
        <Text w3 h4 style={heading}>
          Hello User
        </Text>
        <Text w5 p style={caption}>
          You have X tasks
        </Text>
      </View>
    </Screen>
  )
}

export default Home
