import React from 'react'
import useStyles from './styles'
import { CardShadow, Colors } from 'Theme'
import { HelperText, TextInput } from 'react-native-paper'
import { ViewStyle } from 'react-native'

export type PaperInputProps = React.ComponentProps<typeof TextInput> & {
  flat?: boolean
  errorMessage?: string | false
  rightIcon?: string
  errorStyle?: ViewStyle
  onRightPress?: () => void
}

const Input = (props: PaperInputProps) => {
  const {
    flat,
    style,
    rightIcon,
    errorMessage,
    onRightPress,
    errorStyle,
    ...rest
  } = props
  const { viewStyle } = useStyles()

  let hasError = errorMessage && errorMessage.length > 0 ? true : false

  let inputStyle = viewStyle
  !flat && (inputStyle = { ...viewStyle, ...CardShadow })

  return (
    <>
      <TextInput
        {...rest}
        dense={true}
        style={[inputStyle, style]}
        outlineColor={Colors.foreground}
        underlineColor={flat ? Colors.tintGrey : Colors.foreground}
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
