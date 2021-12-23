import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from '@Theme'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      width,
      height,
    },
    backContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    image: {
      width: 250,
      marginTop: height * 0.1,
      alignSelf: 'center',
    },
    heading: {
      paddingHorizontal: 18,
      color: Colors.primary,
    },
    caption: {
      paddingHorizontal: 18,
      marginTop: 10,
      color: Colors.tintGrey,
    },
    inputContainer: {
      alignItems: 'center',
      marginTop: 20,
    },

    signUp: {
      marginHorizontal: 18,
      marginTop: 30,
      alignSelf: 'center',
    },
    signUpLabel: {
      paddingTop: Platform.select({ ios: 2 }),
    },
    signIn: {
      position: 'absolute',
      bottom: 50,
      alignSelf: 'center',
    },
  })

export default useStyles
