import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SignInScreen from './index'

jest.setTimeout(30000)

describe('SignInScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {
      route: {
        params: {
          email: null,
        },
      },
    }

    const rendered: any = render(<SignInScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('navigates to SignUp screen', () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
      route: {
        params: {
          email: null,
        },
      },
    }

    const { getByTestId } = render(<SignInScreen {...props} />)

    fireEvent.press(getByTestId('signin-button-sign-up'))

    expect(props.navigation.navigate).toBeCalledWith('SignUp')
  })

  it('navigates to Home screen', async () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
      route: {
        params: {
          email: null,
        },
      },
    }

    const { getByTestId } = render(<SignInScreen {...props} />)

    fireEvent.changeText(getByTestId('input-email-signin'), 'guest@example.com')
    fireEvent.changeText(getByTestId('input-password-signin'), 'guest')

    fireEvent.press(getByTestId('signin-button-continue'))

    await new Promise(r => setTimeout(r, 2000))

    expect(props.navigation.navigate).toBeCalledWith('Home')
  })
})
