import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Be, Props } from './be'

// FLEX UTILS
export function Flex(props: Partial<Props>) {
  return <Be d='flex' {...props} />
}
export function Column(props: Partial<Props>) {
  return <Flex flex='column' {...props} />
}
export function Row(props: Partial<Props>) {
  return <Flex flex='row' {...props} />
}

// HTML ELEMENTS
export function P(props: Partial<Props>) {
  return <Be as='p' {...props} />
}

export function Img(props: Partial<Props>) {
  return <Be as='img' {...props} />
}

export function Li(props: Partial<Props>) {
  return <Be as='li' {...props} />
}
// TODO support anchor attributes
// export function A(props: Partial<Props>) {
//   return <Be as='a' {...props} />
// }
export function Div(props: Partial<Props>) {
  return <Be as='div' {...props} />
}
export function Section(props: Partial<Props>) {
  return <Be as='section' {...props} />
}
export function Ol(props: Partial<Props>) {
  return <Be as='Ol' {...props} />
}
export function Ul(props: Partial<Props>) {
  return <Be as='Ol' {...props} />
}
export function Span(props: Partial<Props>) {
  return <Be as='span' {...props} />
}

// Headings
export function H1(props: Partial<Props>) {
  return <Be as='h1' {...props} />
}
export function H2(props: Partial<Props>) {
  return <Be as='h2' {...props} />
}
export function H3(props: Partial<Props>) {
  return <Be as='h3' {...props} />
}
export function H4(props: Partial<Props>) {
  return <Be as='h4' {...props} />
}
export function H5(props: Partial<Props>) {
  return <Be as='h5' {...props} />
}
export function H6(props: Partial<Props>) {
  return <Be as='h6' {...props} />
}
