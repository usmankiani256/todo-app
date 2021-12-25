import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import TaskItem from './index'

describe('TaskItem Component', () => {
  it('renders high priority, checked and description', () => {
    const rendered: any = render(
      <TaskItem
        priority="high"
        status="checked"
        onToggle={() => {}}
        onPress={() => {}}
        description="Create header page component"
      />,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders medium priority, unchecked', () => {
    const rendered: any = render(
      <TaskItem
        priority="medium"
        status="unchecked"
        onToggle={() => {}}
        onPress={() => {}}
        description="Create header page component"
      />,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders low priority', () => {
    const rendered: any = render(
      <TaskItem
        priority="low"
        status="unchecked"
        onToggle={() => {}}
        onPress={() => {}}
        description="Create header page component"
      />,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('onPress fires', () => {
    const mockFn = jest.fn()

    const { getByTestId } = render(
      <TaskItem
        priority="low"
        status="unchecked"
        onToggle={() => {}}
        onPress={mockFn}
        description="Create header page component"
      />,
    )

    fireEvent.press(getByTestId('task-item-button'))

    expect(mockFn).toBeCalledTimes(1)
  })

  it('onToggle fires', () => {
    const mockFn = jest.fn()

    const { getByTestId } = render(
      <TaskItem
        priority="low"
        status="unchecked"
        onToggle={mockFn}
        onPress={() => {}}
        description="Create header page component"
      />,
    )

    fireEvent.press(getByTestId('task-item-icon'))

    expect(mockFn).toBeCalledTimes(1)
  })
})
