import path from 'path'
import fs from 'fs'

export async function renderFile(result) {
  const { exec } = require('child_process')
  const filePath = path.resolve(__dirname, '../src/index.types.ts')
  fs.writeFileSync(filePath, result)
  exec('npm run lint:src')
  console.log(`${filePath}: Created & Linted`)
}
