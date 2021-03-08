import path from 'path'
import fs from 'fs'

const filePath = path.resolve(
  __dirname,
  '../node_modules/bootstrap/dist/css/bootstrap.css'
)
const bootstrapCss: string = fs.readFileSync(filePath, 'utf8')

export const getCssRuleVariationsFor = (regex: RegExp) =>
  bootstrapCss.match(regex)
