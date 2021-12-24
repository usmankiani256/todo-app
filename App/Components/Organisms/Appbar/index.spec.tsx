import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Appbar from './index'

describe('Appbar Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(<Appbar />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const props = {
      back: false,
      route: {
        name: 'Home screen',
      },
    }

    const rendered: any = render(<Appbar {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('goBack fires', () => {
    const props = {
      back: true,
      navigation: {
        goBack: jest.fn(),
      },
    }

    const { getByTestId }: any = render(<Appbar {...props} />)

    fireEvent.press(getByTestId('appbar-back-id'))

    expect(props.navigation.goBack).toBeCalledTimes(1)
  })
})
