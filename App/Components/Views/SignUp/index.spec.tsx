import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SignUpScreen from './index'

describe('SignUpScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(<SignUpScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('navigates to Sign In screen', async () => {
    const props: any = {
      navigation: {
        navigate: jest.fn(),
      },
    }

    const { getByTestId } = render(<SignUpScreen {...props} />)

    fireEvent.changeText(getByTestId('sign-up-input-name'), 'test user')
    fireEvent.changeText(getByTestId('sign-up-input-email'), 'test@user.com')
    fireEvent.changeText(getByTestId('sign-up-input-password'), 'test')

    fireEvent.press(getByTestId('sign-up-button-create'))

    await new Promise(r => setTimeout(r, 2000))

    expect(props.navigation.navigate).toBeCalledWith('SignIn', {
      email: 'test@user.com',
    })
  })
})
