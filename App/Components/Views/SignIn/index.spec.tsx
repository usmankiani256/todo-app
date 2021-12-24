import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SignInScreen from './index'

describe('SignInScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(<SignInScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('navigates to SignUp screen', () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
    }

    const { getByTestId } = render(<SignInScreen {...props} />)

    fireEvent.press(getByTestId('signin-button-sign-up'))

    expect(props.navigation.navigate).toBeCalledWith('SignUp')
  })
})
