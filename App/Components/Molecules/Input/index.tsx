import React from 'react'
import useStyles from './styles'
import { Colors } from 'Theme'
import { HelperText, TextInput } from 'react-native-paper'
import { ViewStyle } from 'react-native'

export type PaperInputProps = React.ComponentProps<typeof TextInput> & {
  errorMessage?: string | false
  rightIcon?: string
  errorStyle?: ViewStyle
  onRightPress?: () => void
}

const Input = (props: PaperInputProps) => {
  const { style, rightIcon, errorMessage, onRightPress, errorStyle, ...rest } =
    props

  const { viewStyle } = useStyles()

  let hasError = errorMessage && errorMessage.length > 0 ? true : false

  return (
    <>
      <TextInput
        {...rest}
        dense={true}
        style={[viewStyle, style]}
        outlineColor={Colors.foreground}
        underlineColor={Colors.foreground}
        right={
          rightIcon && (
            <TextInput.Icon onPress={onRightPress} name={rightIcon} />
          )
        }
      />
      {hasError && (
        <HelperText style={errorStyle || {}} type="error" visible={hasError}>
          {'    '}* {errorMessage}
        </HelperText>
      )}
    </>
  )
}

export default Input
