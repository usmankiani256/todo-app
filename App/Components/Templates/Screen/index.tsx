import { ScrollView, View, SafeAreaView } from 'react-native'
import useStyles from './styles'
import React from 'react'

type ScrollProps = React.ComponentProps<typeof ScrollView>

interface ScreenProps extends ScrollProps {
  children: React.ReactNode
}

const Screen = (props: ScreenProps) => {
  const { children } = props

  const { root, rootScroll } = useStyles()

  return (
    <ScrollView
      {...props}
      keyboardShouldPersistTaps={'handled'}
      contentInsetAdjustmentBehavior="automatic"
      style={rootScroll}>
      <SafeAreaView>
        <View style={root}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Screen
