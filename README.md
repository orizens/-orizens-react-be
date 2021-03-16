# @orizens/react-be

> Bootstrap Element is a primitive component with typed utility classes and auto-completion - a la &#x27;styled&#x27; jsx, just with readable classes

[![NPM](https://img.shields.io/npm/v/@orizens/react-be.svg)](https://www.npmjs.com/package/@orizens/react-be) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install React-BE

```bash
npm install --save @orizens/react-be
```

Make sure your project includes bootstrap.

## WHY?

Bootstrap is still popular and along with that, react-bootstrap is as well.
React-BE solves the problem of development experience and adds auto-completion for bootstrap utility functions.

## DEMO

https://orizens.github.io/-orizens-react-be/

## Usage

```tsx
import React, { Component } from 'react'

import { Be, Row, H4, Section, Flex, Div, Ol, Li } from '@orizens/react-be'

function Example() {
  return (
    <Section>
      <H4 text='dark'>React-BE</H4>
      <Column col='10'>
        <Be flex='row' overflow='auto'>react-be is a time saver</Be>
        <Flex flex='row'>
          <Div>
            <Ol>
              <Li>there are more elements - with FULL Typescript support</Li>
              <Li>more elements are coming soon...</Li>
            </Ol>
          </Div>
        </Flex>
      </Column>
    </Section>
  )
}
```

## Support HTML-Elements powered by React-BE

these are the elements that are available with React-Be typings:

Flex, Column, Row, P, Img, Li, on, Div, Section, Ol, Ul, Span, H1, H2, H3, H4, H5, H6

more to come.

## Future Features

- [x] support these elements with typescript: img
- [x] support column size
- [ ] support responsive variations (i.e, flex-md-column, col-md-2)
- [ ] add support for mulitple values for special utilities (or all)
- [x] add built in utility-elements: Flex, Column, Row, P, Img, Li, on, Div, Section, Ol, Ul, Span, H1, H2, H3, H4, H5, H6
- [ ] add more built in utility/html-elements: b, em, nav, footer, a, etc..

## License

MIT © [orizens](https://github.com/orizens)
