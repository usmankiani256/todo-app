import { Dimensions, Platform, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    button: {
      width: width - 36,
    },
    buttonLabel: {
      paddingTop: Platform.select({ ios: 2 }),
    },
  })

export default useStyles
