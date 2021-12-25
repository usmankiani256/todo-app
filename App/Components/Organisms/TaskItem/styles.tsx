import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from 'Theme'

const { width } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      minHeight: 50,
      width: width - 36,
      alignSelf: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderLeftWidth: 0,
      borderColor: Colors.tintGrey,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    indicator: {
      height: '100%',
      borderWidth: 1,
      borderColor: Colors.tintGrey,
      width: 8,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      marginRight: 10,
    },
    text: {
      paddingTop: 2,
      marginLeft: 10,
      marginRight: 50,
      marginVertical: 8,
    },
  })

export default useStyles
