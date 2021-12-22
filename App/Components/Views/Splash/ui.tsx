import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, View } from 'react-native'

const Welcome = (props: StackScreenProps) => {
  useService(props)

  const { root } = useStyles()

  return (
    <>
      <StatusBar hidden />
      <View style={root} />
    </>
  )
}

export default Welcome
