import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import HomeScreen from './index'

describe('HomeScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(<HomeScreen {...props} />).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  // it('navigates to SignIn screen', () => {
  //   const props: any = {
  //     navigation: {
  //       navigate: jest.fn(),
  //     },
  //   }

  //   const { getByTestId } = render(<HomeScreen {...props} />)

  //   fireEvent.press(getByTestId('welcome-button-continue'))

  //   expect(props.navigation.navigate).toBeCalledWith('SignIn')
  // })
})
