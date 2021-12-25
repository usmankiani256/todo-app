import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CreateTask from './index'

jest.useFakeTimers()

describe('CreateTask Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(<CreateTask />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  // it('opens dialog on click', () => {
  //   const rendered = render(<CreateTask />)
  //   const json = rendered.toJSON()

  //   fireEvent.press(rendered.getByTestId('create-task-button'))

  //   expect(json).toMatchSnapshot()
  // })
})
