import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from 'Theme'

const { width } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    input: {
      width: width * 0.7,
      alignSelf: 'center',
      marginBottom: 15,
      borderWidth: 1,
      borderColor: Colors.tintGrey,
    },
    dropdown: {
      borderColor: Colors.tintGrey,
      marginTop: 5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      height: 45,
    },
    ddContainer: {
      width: width * 0.7,
      alignSelf: 'center',
    },
    button: {
      width: width * 0.7,
      alignSelf: 'center',
      marginBottom: 25,
      zIndex: -1,
    },
  })

export default useStyles
