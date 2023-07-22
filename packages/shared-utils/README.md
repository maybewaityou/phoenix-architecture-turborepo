# shared-utils

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

项目通用工具类库, 包含函数式编程库(fp-ts)等.

## 内容列表

- [背景](#背景)
- [安装](#安装)
- [使用说明](#使用说明)
- [示例](#示例)
- [维护者](#维护者)
- [License](#license)

## 背景

项目通用工具类库, 封装了项目中常规的功能, 只需维护一份代码即可, 其他项目直接引入.

## 安装

使用 **npm** 进行安装:

```shell
npm install shared-utils --registry=http://proxy.climb2fame.com:4873
```

或者使用 **yarn** 进行安装:

```shell
yarn add shared-utils --registry=http://proxy.climb2fame.com:4873
```

或者使用 **pnpm** 进行安装:

```shell
pnpm add shared-utils --registry=http://proxy.climb2fame.com:4873
```

## 使用说明

### async 模块

```typescript
// delay
async function delayUseCase() {
  console.log('asyncFunc start')
  await delay(1000)
  console.log('asyncFunc end')
}

// to
async function toUseCase() {
  const [error, result] = await to(promise())
  console.log(`== error ===>>>> ${error}`)
  console.log(`== result ===>>>> ${result}`)
}

// toE
async function toEUseCase() {
  const resultE = await toE(promise())
  const result = pipe(
    resultE,
    match(
      (error) => {
        console.log(`== error ===>>>> ${error}`)
        return error
      },
      (data) => {
        console.log(`== data ===>>>> ${data}`)
        return data
      }
    )
  )
  console.log(result) // data or error
}
```

## 示例

想了解我们建议的规范是如何被应用的, 请参考 [examples](examples/).

## 维护者

[@MeePwn](https://github.com/maybewaityou).

## License

[MIT © MeePwn.](LICENSE)
