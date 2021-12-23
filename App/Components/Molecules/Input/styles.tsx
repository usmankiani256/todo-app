import { Colors } from 'Theme'
import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    viewStyle: {
      width: width - 36,
      marginTop: 15,
      backgroundColor: Colors.foreground,
    },
  })

export default useStyles
