export type UtilsRegex = {
  [util: string]: RegExp
}
const createRegexForUtil = (util: string) =>
  // eslint-disable-next-line no-useless-escape
  new RegExp(`(\^\\.${util}-.+)\\b`, 'gim')
const createVariations = (util: string) =>
  ['r', 'l', 't', 'b', 'x', 'y'].map((dir) => `${util}${dir}`).concat(`${util}`)
const utilList = [
  'align',
  'bg',
  'border',
  'd',
  'display',
  'embed',
  'fixed',
  'flex',
  'float',
  'font',
  'h',
  'justify',
  'min',
  'overflow',
  'position',
  'rounded', // allow mq,
  'shadow',
  'text',
  // 'user-select',
  'w',
  // 'col',
  // 'justify-content',
  ...createVariations('m'),
  ...createVariations('p')
]

// const utilWithMediaQueries = [
//   'd',
//   'flex',
//   'float',
//   ...createVariations('m'),
//   ...createVariations('p')
// ]
export const utils: UtilsRegex = utilList.reduce((acc, item) => {
  return {
    ...acc,
    [item]: createRegexForUtil(item)
  }
}, {})
