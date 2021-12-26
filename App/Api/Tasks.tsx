import Async from 'Store/Async'

export interface Task {
  id?: number
  priority: 'high' | 'medium' | 'low'
  status: 'checked' | 'unchecked'
  description: string
}

// export interface LoginData {
//   email: string
//   password: string
// }

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
  try {
    const response = await Async.getItem(Async.Item.Tasks)

    if (response === null) {
      return DefaultTasks
    }

    const dupCheck = response.filter((t: any) => t.id == 1).length > 0

    if (dupCheck) {
      return response
    }

    return [...DefaultTasks, ...response]
  } catch (e) {
    return DefaultTasks
  }
}

async function createTask(task: Task) {
  try {
    const tasks = await getTasks()

    const lastId = tasks[tasks.length - 1].id

    if (lastId) {
      await Async.setItem(Async.Item.Tasks, [
        ...tasks,
        { ...task, id: lastId + 1 },
      ])
      console.debug('Task Created', task.description)
    }
  } catch (e: any) {}
}

async function updateTask(id: number, data: any) {
  try {
    let tasks = await getTasks()

    let index = tasks.findIndex(t => t.id === id)
    tasks[index] = { ...tasks[index], ...data }
    await Async.setItem(Async.Item.Tasks, tasks)
    console.debug('Task Updated', tasks[index])
  } catch (e: any) {}
}

export { getTasks, createTask, updateTask }
