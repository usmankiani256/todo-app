import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Search from './index'

describe('Search Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(<Search />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const rendered: any = render(
      <Search value="sample@email.com" placeholder="Johndoe@gmail.com" />,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('onChangeText fires', () => {
    const mockFn = jest.fn()

    const { getByTestId }: any = render(<Search onChangeText={mockFn} />)

    fireEvent.changeText(getByTestId('search-id'), 'abc')

    expect(mockFn).toBeCalledWith('abc')
  })
})
