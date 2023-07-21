import type { PlopTypes } from '@turbo/gen'

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
        templateFile: 'templates/test/index.spec.hbs'
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
      }
    ]
  })
}
