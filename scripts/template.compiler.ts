export const compileTemplate = (data, ruleSet) => `
export interface BeProps {
  ${data}
};
export const ruleSet = new Set(${ruleSet});
`
