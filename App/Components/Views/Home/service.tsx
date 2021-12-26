import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'
import React from 'react'
import { updateTask } from '@Api'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from 'Store/Redux/Tasks'
import { RootState } from 'Store/Redux'

const useService = (props: StackScreenProps) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = React.useState(false)

  const Tasks = useSelector((state: RootState) => state.Tasks)
  const tasks = !Tasks.loading && Tasks.success && Tasks.data

  React.useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  function onToggleStatus(id: number | any) {
    if (tasks) {
      setLoading(true)
      let { status } = tasks.filter(t => t.id === id)[0]

      updateTask(id, {
        status: status === 'checked' ? 'unchecked' : 'checked',
      }).then(() => {
        setTimeout(() => {
          dispatch(getTasks())
          setLoading(false)
        }, 500)
      })
    }
  }

  return { tasks, loading, onToggleStatus }
}

export default useService
