import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Input from './index'

describe('Button Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(<Input />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const rendered: any = render(
      <Input
        label="Email Address"
        keyboardType="email-address"
        value="sample@email.com"
        placeholder="Johndoe@gmail.com"
        errorMessage="this is an error message"
      />,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('onChangeText fires', () => {
    const mockFn = jest.fn()

    const { getByTestId }: any = render(
      <Input
        label="Email Address"
        keyboardType="email-address"
        value="sample@email.com"
        placeholder="Johndoe@gmail.com"
        errorMessage="this is an error message"
        onChangeText={mockFn}
      />,
    )

    fireEvent.changeText(getByTestId('input-id'), 'abc')

    expect(mockFn).toBeCalledWith('abc')
  })
})
