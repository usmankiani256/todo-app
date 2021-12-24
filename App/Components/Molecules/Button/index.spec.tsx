import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Button from './index'

const children = 'Click me!'

describe('Button Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(<Button>{children}</Button>).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const props = {
      icon: 'camera',
      disabled: true,
    }

    const rendered: any = render(
      <Button {...props}>{children}</Button>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('is called once on click', () => {
    const mockFn = jest.fn()

    const { getByText }: any = render(
      <Button onPress={mockFn}>{children}</Button>,
    )

    fireEvent.press(getByText(children))

    expect(mockFn).toBeCalledTimes(1)
  })
})
