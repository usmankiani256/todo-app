import * as React from 'react'
import { render } from '@testing-library/react-native'
import Button from './index'

const text = 'Click me!'
let defaultStyle = {
  backgroundColor: '#6200ee',
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 0.75 },
  shadowOpacity: 0.24,
  shadowRadius: 1.5,
  minWidth: 64,
  borderStyle: 'solid',
  elevation: 2,
  borderColor: 'transparent',
  borderWidth: 0,
  borderRadius: 4,
}

describe('Text: renders hello world', () => {
  const rendered: any = render(<Button>{text}</Button>).toJSON()

  test('renders type text', () => {
    expect(rendered.type).toBe('View')
  })

  test('has text', () => {
    expect(rendered.children[0].children[0].children[0].children[0]).toBe(text)
  })

  test('has default styles', () => {
    expect(rendered.props.style).toStrictEqual(defaultStyle)
  })
})

describe('Text: receives built in props', () => {
  let props = {
    icon: 'camera',
  }

  const { UNSAFE_getByProps }: any = render(<Button {...props}>{text}</Button>)

  console.log(
    '🚀 ~ file: index.spec.tsx ~ line 41 ~ describe ~ rendered',
    UNSAFE_getByProps(props),
  )

  test('receives props', () => {
    expect(UNSAFE_getByProps(props).toBeDefined())
  })
})
