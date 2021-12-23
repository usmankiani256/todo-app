import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'

const Splash = (props: StackScreenProps) => {
  useService(props)

  const { root } = useStyles()

  return <View style={root} />
}

export default Splash
