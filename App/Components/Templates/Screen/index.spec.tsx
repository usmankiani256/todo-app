import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Text } from '@Atoms'
import Screen from './index'

describe('Screen Component', () => {
  it('renders correctly', () => {
    const rendered: any = render(
      <Screen>
        <Text>Hello, world!</Text>
      </Screen>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const rendered: any = render(
      <Screen scrollEnabled={false}>
        <Text>Hello, world!</Text>
      </Screen>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })
})
