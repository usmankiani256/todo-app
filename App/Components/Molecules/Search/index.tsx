import React from 'react'
import useStyles from './styles'
import { Colors } from 'Theme'
import { TextInput } from 'react-native-paper'
import { ViewStyle } from 'react-native'

export type PaperInputProps = React.ComponentProps<typeof TextInput> & {
  errorStyle?: ViewStyle
  onRightPress?: () => void
}

const Search = (props: PaperInputProps) => {
  const { style, onRightPress, ...rest } = props

  const { viewStyle } = useStyles()

  return (
    <>
      <TextInput
        {...rest}
        testID="search-id"
        dense={true}
        style={[viewStyle, style]}
        outlineColor={Colors.foreground}
        underlineColor={Colors.foreground}
        left={<TextInput.Icon onPress={onRightPress} name={'text-search'} />}
      />
    </>
  )
}

export default Search
