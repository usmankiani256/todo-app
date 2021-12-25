import * as React from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'
import useStyles from './styles'
import { Input } from 'Components/Molecules'
import DropDownPicker from 'react-native-dropdown-picker'
import { Text } from 'Components/Atoms'

export type Priority = 'high' | 'medium' | 'low' | null

export type DialogProps = {
  hideDialog: () => void
  edit?: boolean
  description?: string
  priority?: Priority
}

const CreateTaskDialog = (props: DialogProps) => {
  const { hideDialog, edit } = props

  const [description, setDescription] = React.useState<string | undefined>('')

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<any>(null)
  const [items, setItems] = React.useState([
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
  ])

  React.useEffect(() => {
    console.log('Checking values')
    if (edit && props?.description && props?.priority) {
      console.log('Updating values')
      // Update TextInput value
      // Update Priority
      setTimeout(() => {
        setDescription(props?.description)
        setValue(props?.priority)
      }, 1)
    }
  }, [edit, props])

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
        <Button mode="contained" style={button} onPress={() => {}}>
          {edit ? 'Update Task' : 'Create Task'}
        </Button>
      </Dialog>
    </Portal>
  )
}

export default CreateTaskDialog
