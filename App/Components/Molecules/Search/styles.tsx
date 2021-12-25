import { Colors, CardShadow } from 'Theme'
import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    viewStyle: {
      width: width - 36,
      marginTop: 15,
      backgroundColor: Colors.foreground,
      alignSelf: 'center',
      ...CardShadow,
    },
  })

export default useStyles
