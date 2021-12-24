import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SignUpScreen from './index'

describe('SignUpScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(<SignUpScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('navigates to SignIn screen', () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
    }

    const { getByTestId } = render(<SignUpScreen {...props} />)

    fireEvent.press(getByTestId('sign-up-button-signin'))

    expect(props.navigation.navigate).toBeCalledWith('SignIn')
  })
})
