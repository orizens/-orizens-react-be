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

import { Be } from '@orizens/react-be'

function Example() {
  return <Be flex='row' overflow='auto' />
}
```

## Future Features

- [x] support these elements with typescript: img
- [x] support column size
- [ ] support responsive variations (i.e, flex-md-column, col-md-2)
- [ ] add support for mulitple values for special utilities (or all)
- [ ] add built in utility-elements: Flex, Font, etc

## License

MIT © [orizens](https://github.com/orizens)
