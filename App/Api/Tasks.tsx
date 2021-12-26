import Async from 'Store/Async'

export interface Task {
  id?: number
  priority: 'high' | 'medium' | 'low'
  status: 'checked' | 'unchecked'
  description: string
}

export const DefaultTasks: Task[] = [
  {
    id: 1,
    priority: 'high',
    status: 'checked',
    description: 'Design the application',
  },
  {
    id: 2,
    priority: 'high',
    status: 'unchecked',
    description: 'Translate design',
  },
  {
    id: 3,
    priority: 'medium',
    status: 'unchecked',
    description: 'Test ui components',
  },
]

async function getTasks(): Promise<Task[]> {
  const response: Task[] = await Async.getItem(Async.Item.Tasks)

  if (response === null) {
    return DefaultTasks
  }

  return response || DefaultTasks
}

async function createTask(task: Task) {
  const tasks = await getTasks()

  const lastId = tasks[tasks.length - 1].id || 0

  await Async.setItem(Async.Item.Tasks, [...tasks, { ...task, id: lastId + 1 }])
  console.debug('Task Created', task.description)
  return task
}

async function updateTask(id: number, data: any) {
  let tasks = await getTasks()

  let index = tasks.findIndex(t => t.id === id)
  tasks[index] = { ...tasks[index], ...data }
  await Async.setItem(Async.Item.Tasks, tasks)
  console.debug('Task Updated', tasks[index])
  return tasks[index]
}

export { getTasks, createTask, updateTask }
