import * as React from 'react'
import { render } from '@testing-library/react-native'
import Text from './index'
import { scaleFont } from 'Utils'
import { FontFamily, Colors } from '@Theme'

const text = 'Hello world!'
let defaultStyle = {
  color: Colors.text,
  fontSize: 20,
  lineHeight: 20,
  fontFamily: 'SofiaPro',
}

describe('Text: renders hello world', () => {
  const rendered: any = render(<Text>{text}</Text>).toJSON()

  test('renders type text', () => {
    expect(rendered.type).toBe('Text')
  })

  test('has text', () => {
    expect(rendered.children[0]).toBe(text)
  })

  test('has default styles', () => {
    expect(rendered.props.style).toStrictEqual(defaultStyle)
  })
})

describe('Text: receives props', () => {
  let text = 'Hello world!'

  let style = {
    ...defaultStyle,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'justify',
  }

  let customStyle = {
    padding: 10,
  }

  test('receives props', () => {
    const rendered: any = render(
      <Text bold italic center justify selfCenter style={customStyle}>
        {text}
      </Text>,
    ).toJSON()
    expect(rendered.props.style).toStrictEqual({ ...style, ...customStyle })
  })

  test('receives h1 and w1', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(48),
      lineHeight: scaleFont(48),
      fontFamily: FontFamily.Bold,
    }

    const rendered: any = render(
      <Text h1 w1>
        {text}
      </Text>,
    ).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives h2 and w2', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(34),
      lineHeight: scaleFont(34),
      fontFamily: FontFamily.SemiBold,
    }

    const rendered: any = render(
      <Text h2 w2>
        {text}
      </Text>,
    ).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives h3 and w3', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(24),
      lineHeight: scaleFont(24),
      fontFamily: FontFamily.Medium,
    }

    const rendered: any = render(
      <Text h3 w3>
        {text}
      </Text>,
    ).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives h4 and w4', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(20),
      lineHeight: scaleFont(20),
      fontFamily: FontFamily.Regular,
    }

    const rendered: any = render(
      <Text h4 w4>
        {text}
      </Text>,
    ).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives h5 and w5', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(16),
      lineHeight: scaleFont(16),
      fontFamily: FontFamily.Light,
    }

    const rendered: any = render(
      <Text h5 w5>
        {text}
      </Text>,
    ).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives p', () => {
    const style = {
      ...defaultStyle,
      fontSize: scaleFont(14),
      lineHeight: scaleFont(14),
    }

    const rendered: any = render(<Text p>{text}</Text>).toJSON()

    expect(rendered.props.style).toStrictEqual(style)
  })

  test('receives ...rest props', () => {
    const numberOfLines = 4

    const rendered: any = render(
      <Text numberOfLines={numberOfLines}>{text}</Text>,
    ).toJSON()

    expect(rendered.props.numberOfLines).toStrictEqual(numberOfLines)
  })
})
