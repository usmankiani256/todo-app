import * as React from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'
import useStyles from './styles'
import { Input } from 'Components/Molecules'
import DropDownPicker from 'react-native-dropdown-picker'
import { Text } from 'Components/Atoms'
import { createTask, updateTask } from 'Api'
import { useDispatch } from 'react-redux'
import { getTasks } from 'Store/Redux/Tasks'

export type Priority = 'high' | 'medium' | 'low' | null

export type DialogProps = {
  hideDialog: () => void
  edit?: boolean
  id?: number
  description?: string
  priority?: Priority
}

const CreateTaskDialog = (props: DialogProps) => {
  const { hideDialog, edit } = props

  const dispatch = useDispatch()

  const [description, setDescription] = React.useState<any>('')

  const [loading, setLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<any>(null)
  const [items, setItems] = React.useState([
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
  ])

  React.useEffect(() => {
    setTimeout(() => {
      setDescription(props?.description || '')
      setValue(props?.priority || '')
    }, 1)
  }, [props])

  React.useEffect(() => {
    if (description.length > 0 && value?.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [description, value])

  function onUpdateTask() {
    if (props.id) {
      setLoading(true)
      updateTask(props?.id, { description: description, priority: value }).then(
        () => {
          setTimeout(() => {
            dispatch(getTasks())
            setLoading(false)
            hideDialog()
          }, 1000)
        },
      )
    }
  }

  function onCreateTask() {
    setLoading(true)
    createTask({
      description: description,
      priority: value,
      status: 'unchecked',
    }).then(() => {
      setTimeout(() => {
        dispatch(getTasks())
        setLoading(false)
        hideDialog()
      }, 1000)
    })
  }

  const { input, dropdown, ddContainer, button } = useStyles()

  return (
    <Portal>
      <Dialog visible onDismiss={hideDialog}>
        <Dialog.Title>{edit ? 'Update Task' : 'Create Task'}</Dialog.Title>
        <Dialog.Content>
          <Text w2 p>
            Description
          </Text>
          <Input
            placeholder="e.g Buy groceries"
            value={description}
            onChangeText={setDescription}
            style={input}
          />

          <Text w2 p>
            Priority
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={dropdown}
            containerStyle={ddContainer}
          />
        </Dialog.Content>
        <Button
          loading={loading}
          disabled={loading || disabled}
          mode="contained"
          style={button}
          onPress={edit ? onUpdateTask : onCreateTask}>
          {loading && edit
            ? 'Updating'
            : loading
            ? 'Creating'
            : edit
            ? 'Update Task'
            : 'Create Task'}
        </Button>
      </Dialog>
    </Portal>
  )
}

export default CreateTaskDialog
