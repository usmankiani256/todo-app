import * as React from 'react'
import { View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import useStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'Theme'
import { Text } from 'Components/Atoms'

export type TaskItemProps = {
  priority: 'high' | 'medium' | 'low'
  status: 'checked' | 'unchecked'
  description: string
  onToggle: () => void
  onPress: () => void
}

const TaskItem = (props: TaskItemProps) => {
  const { priority, status, description, onToggle, onPress } = props

  let indicatorColor =
    priority === 'high'
      ? Colors.priority.high
      : priority === 'medium'
      ? Colors.priority.medium
      : Colors.priority.low

  let taskStatus = status === 'checked' ? true : false

  const { container, indicator, text } = useStyles()

  return (
    <TouchableRipple
      testID="task-item-button"
      onPress={onPress}
      style={container}>
      <>
        <View
          style={{
            ...indicator,
            backgroundColor: indicatorColor,
            borderColor: indicatorColor,
          }}
        />
        <Icon
          testID="task-item-icon"
          onPress={onToggle}
          name={taskStatus ? 'checkbox-marked' : 'checkbox-blank-outline'}
          color={taskStatus ? Colors.primary : Colors.tintGrey}
          size={25}
          style={{ opacity: taskStatus ? 0.7 : 1 }}
        />
        <Text
          justify
          style={{
            ...text,
            textDecorationLine: taskStatus ? 'line-through' : undefined,
            opacity: taskStatus ? 0.7 : 1,
          }}>
          {description}
        </Text>
      </>
    </TouchableRipple>
  )
}

export default TaskItem
