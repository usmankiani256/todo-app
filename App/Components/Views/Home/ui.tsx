import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'
import { Search } from '@Molecules'
import { Screen } from '@Templates'
import { TaskItem, CreateTask } from '@Organisms'

const Home = (props: StackScreenProps) => {
  const { onContinue } = useService(props)

  const { container, heading, caption } = useStyles()

  return (
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
        <TaskItem
          priority="high"
          status="checked"
          onToggle={() => {}}
          description="Create header page component"
        />
        <TaskItem
          priority="medium"
          status="unchecked"
          onToggle={() => {}}
          description="Meeting with developers"
        />
        <TaskItem
          priority="low"
          status="unchecked"
          onToggle={() => {}}
          description="Design UI prototype"
        />
        <CreateTask />
      </View>
    </Screen>
  )
}

export default Home
