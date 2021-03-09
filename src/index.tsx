import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import { BeProps, ruleSet } from './index.types'

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    React.ImgHTMLAttributes<HTMLElement>,
    BeProps {
  // non bootstrap
  as?: string | React.FC
  children?: React.ReactNode | React.ReactNodeArray
}

export const Be = ({
  as = 'div',
  role,
  children,
  ...props
}: Partial<Props>) => {
  const { className, otherProps } = parseProps(props)
  return React.createElement(
    as,
    { ...otherProps, className: className?.trim() || null, role } as any,
    children
  )
}

/**
 * parse react props and
 * @param props
 * @returns { className: string; props: any; }
 */
const parseProps = (props: Partial<BeProps>) =>
  Object.entries(props).reduce(
    (result, [propName, propValue]) => {
      return ruleSet.has(propName)
        ? {
            className: `${result.className} ${propName}-${propValue}`,
            otherProps: result.otherProps
          }
        : {
            ...result,
            otherProps: {
              ...result.otherProps,
              [propName]: propValue
            }
          }
    },
    {
      className: '',
      otherProps: {}
    }
  )
