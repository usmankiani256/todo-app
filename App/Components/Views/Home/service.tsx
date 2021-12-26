import { StackScreenProps } from '@Navigation/Stack/types'
import React from 'react'
import { updateTask } from '@Api'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from 'Store/Redux/Tasks'
import { RootState } from 'Store/Redux'

const useService = (props: StackScreenProps) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [data, setData] = React.useState<any>(null)

  const Tasks = useSelector((state: RootState) => state.Tasks)
  const tasks = !Tasks.loading && Tasks.success && Tasks.data

  React.useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  React.useEffect(() => {
    if (query.length > 0 && tasks) {
      const filtered = tasks.filter(t =>
        t.description.toLowerCase().includes(query.toLowerCase()),
      )

      setData(filtered)
      setQuery(query)
    } else {
      setQuery(query)
      setData(tasks)
    }
  }, [query, tasks])

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

  return { data, loading, query, setQuery, onToggleStatus }
}

export default useService
