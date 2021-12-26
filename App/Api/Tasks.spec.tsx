import { getTasks, createTask, updateTask } from './index'
import { Task } from './Tasks'

const task: Task = {
  priority: 'high',
  description: 'Sample description',
  status: 'unchecked',
}

const data = {
  id: 2,
  description: 'Updated description',
}

describe('Tasks API', () => {
  it('returns default tasks', async () => {
    return getTasks().then(tasks => {
      expect(tasks.length).toBe(3)
    })
  })

  it('creates a task', async () => {
    return createTask(task).then(t => {
      expect(task).toStrictEqual(t)
    })
  })

  it('get updated tasks', async () => {
    return getTasks().then(tasks => {
      expect(tasks.length).toBe(4)
    })
  })

  it('updates task', async () => {
    return updateTask(data.id, {
      description: data.description,
    }).then(task => {
      expect(data.description).toBe(task?.description)
    })
  })
})
