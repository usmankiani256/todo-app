import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View, ActivityIndicator } from 'react-native'
import { Text } from '@Atoms'
import { Search } from '@Molecules'
import { Screen } from '@Templates'
import { TaskItem, CreateTask } from '@Organisms'
import { Task } from 'Api/Tasks'

const Home = (props: StackScreenProps) => {
  const { tasks, loading, onToggleStatus } = useService(props)

  const { container, heading, caption } = useStyles()

  function renderTask(task: Task) {
    const { id, description, status, priority } = task
    return (
      <TaskItem
        id={id}
        priority={priority}
        status={status}
        description={description}
        onToggle={() => onToggleStatus(id)}
      />
    )
  }

  return (
    <>
      <Screen>
        <View style={container}>
          <Text w3 h3 style={heading}>
            Hello User!
          </Text>
          <Text w5 p style={caption}>
            You have X tasks
          </Text>
          <Search
            // value={password}
            // onChangeText={setPassword}
            placeholder="Search Tasks"
          />
          <Text w2 h4 style={heading}>
            Tasks:
          </Text>
          {loading ? <ActivityIndicator /> : tasks && tasks.map(renderTask)}
        </View>
      </Screen>
      <CreateTask />
    </>
  )
}

export default Home
