import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from 'Theme'

const { width } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    root: {
      position: 'absolute',
      right: 20,
      bottom: 40,
      backgroundColor: Colors.primary,
    },
  })

export default useStyles
