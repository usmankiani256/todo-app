import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import WelcomeScreen from './index'

describe('WelcomeScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(<WelcomeScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('navigates to SignIn screen', () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
    }

    const { getByTestId } = render(<WelcomeScreen {...props} />)

    fireEvent.press(getByTestId('welcome-button-continue'))

    expect(props.navigation.navigate).toBeCalledWith('SignIn')
  })
})
