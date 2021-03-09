// eslint-disable-next-line no-unused-vars
import { UtilsRegex, utils } from './config'
import { isRulveValidToParse, formatRule } from './utils'
import { getCssRuleVariationsFor } from './css.loader'
import { compileTemplate } from './template.compiler'

function transform(utilsMap: UtilsRegex): string[] {
  const bootstrapInterface = Object.entries(utilsMap).reduce(
    (acc: string[], [prefix, regex]) => {
      const cssRuleVariations = getCssRuleVariationsFor(regex) || []
      const ruleValues = cssRuleVariations
        ?.filter(isRulveValidToParse)
        .map((rule: string) => formatRule(rule, prefix))
        .filter(Boolean)

      const uniqueValues = new Set(ruleValues)
      return [...acc, `${prefix}: '${[...uniqueValues].join("' | '")}';`]
    },
    []
  )
  return bootstrapInterface
}
// console.log(transform(utils).join('\n'))
console.log(
  compileTemplate(
    transform(utils)
      .map((def) => `${def}\n`)
      .join(''),
    `['${Object.keys(utils).join("','")}']`
  )
)
