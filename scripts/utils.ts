const ruleFilters = ['::before', '::after', ',']
export const isRulveValidToParse = (rule: string) => {
  return rule && !ruleFilters.some((filter: string) => rule.includes(filter))
}

const mediaQueriesInfix = ['sm', 'md', 'lg', 'xl', 'print']
export const formatRule = (result: string, prefix: string) => {
  const isMedia = mediaQueriesInfix.some((infix) =>
    result.includes(`-${infix}-`)
  )
  return !isMedia ? result.replace(`.${prefix}-`, '') : ''
}
