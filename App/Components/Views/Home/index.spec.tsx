import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import HomeScreen from './index'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@Redux'

describe('HomeScreen Component', () => {
  it('renders correctly', () => {
    const props: any = {}

    const rendered: any = render(
      <ReduxProvider store={store}>
        <HomeScreen {...props} />
      </ReduxProvider>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })
})
