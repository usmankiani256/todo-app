import * as React from 'react'
import { FAB } from 'react-native-paper'
import useStyles from './styles'
import { TaskDialog } from '@Molecules'

export type CreateTaskProps = {}

const CreateTask = (props: CreateTaskProps) => {
  const {} = props

  const [visible, setVisible] = React.useState(false)

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const { root } = useStyles()

  return (
    <>
      <FAB
        testID="create-task-button"
        onPress={showDialog}
        style={root}
        icon="plus"
      />
      {visible && <TaskDialog hideDialog={hideDialog} />}
    </>
  )
}

export default CreateTask
