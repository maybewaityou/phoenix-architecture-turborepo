/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
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
        path: 'packages/{{name}}/__test__/index.spec.ts',
        templateFile: 'templates/__test__/index.spec.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'templates/README.md.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'templates/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsconfig.json',
        templateFile: 'templates/tsconfig.json.hbs'
      },
      function createExamplesDirectory(answers: { name?: string }) {
        const examplesDirName = 'examples'
        if (!answers.name)
          return `no name provided, skipping ${examplesDirName} directory creation`

        const directory = path.join(
          plop.getDestBasePath(),
          'packages',
          answers.name,
          examplesDirName
        )
        fs.mkdirSync(directory)

        return `created empty ${examplesDirName} directory for ${answers.name}`
      }
    ]
  })
}
