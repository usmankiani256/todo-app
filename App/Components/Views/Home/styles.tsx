import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from '@Theme'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      width,
      height,
    },
    heading: {
      color: Colors.primary,
      margin: 18,
      marginBottom: 10,
    },
    caption: {
      marginLeft: 18,
      color: Colors.tintGrey,
    },
  })

export default useStyles
