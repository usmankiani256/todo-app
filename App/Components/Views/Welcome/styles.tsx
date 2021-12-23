import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from '@Theme'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
    },
    image: {
      width: 250,
      marginTop: height * 0.15,
      marginBottom: 20,
      alignSelf: 'center',
    },
    heading: {
      color: Colors.primary,
    },
    caption: {
      paddingHorizontal: width * 0.1,
      marginTop: 30,
      color: Colors.tintGrey,
    },
    button: {
      marginTop: 70,
    },
    buttonLabel: {
      paddingTop: Platform.select({ ios: 2 }),
    },
  })

export default useStyles
