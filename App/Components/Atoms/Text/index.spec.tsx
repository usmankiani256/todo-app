import * as React from 'react'
import { render } from '@testing-library/react-native'
import Text from './index'

const children = 'Hello world!'

describe('Text Component', () => {
  it('renders text correctly', () => {
    const rendered: any = render(<Text>{children}</Text>).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders props', () => {
    const numberOfLines = 4
    const customStyle = {
      padding: 10,
    }

    const rendered: any = render(
      <Text
        h1
        h2
        bold
        italic
        center
        justify
        selfCenter
        style={customStyle}
        numberOfLines={numberOfLines}>
        {children}
      </Text>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders h2 and w2', () => {
    const rendered: any = render(
      <Text h2 w2>
        {children}
      </Text>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders h3 and w3', () => {
    const rendered: any = render(
      <Text h3 w3>
        {children}
      </Text>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders h4 and w4', () => {
    const rendered: any = render(
      <Text h4 w4>
        {children}
      </Text>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders h5 and w5', () => {
    const rendered: any = render(
      <Text h5 w5>
        {children}
      </Text>,
    ).toJSON()

    expect(rendered).toMatchSnapshot()
  })

  it('renders p', () => {
    const rendered: any = render(<Text p>{children}</Text>).toJSON()

    expect(rendered).toMatchSnapshot()
  })
})
