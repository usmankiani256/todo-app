import { StyleSheet } from 'react-native'
import { Colors } from '@Theme'

const useStyles = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: Colors.foreground,
    },
  })

export default useStyles
