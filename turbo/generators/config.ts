import type { PlopTypes } from '@turbo/gen'
import fs from 'fs-extra'
import path from 'path'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('vendor', {
    description: 'Add a new vendor to packages',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name for the vendor (example: "shared-utils")'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.ts',
        templateFile: 'templates/src/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/test/index.spec.ts',
        templateFile: 'packages/{{name}}/test/index.spec.hbs'
      },
      function createFixturesDirectory(answers: { name?: string }) {
        if (!answers.name) {
          return 'no name provided, skipping fixture directory creation'
        }

        const directory = path.join(
          // resolves to the root of the current workspace
          plop.getDestBasePath(),
          '__tests__',
          '__fixtures__',
          answers.name
        )
        fs.mkdirSync(directory)

        return `created empty ${directory} directory for fixtures`
      }
    ]
  })
}