import * as React from 'react'
import { Button as PaperButton } from 'react-native-paper'
import useStyles from './styles'

export type ButtonProps = React.ComponentProps<typeof PaperButton>

const Button = (props: ButtonProps) => {
  const { children, onPress, icon, ...rest } = props

  const { button, buttonLabel } = useStyles()

  return (
    <PaperButton
      icon={icon}
      mode="contained"
      contentStyle={button}
      labelStyle={buttonLabel}
      onPress={onPress}
      {...rest}>
      {children}
    </PaperButton>
  )
}

export default Button
