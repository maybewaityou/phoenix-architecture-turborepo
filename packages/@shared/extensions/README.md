# @shared/extensions

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

项目通用类扩展库, 包含函数式编程库(fp-ts)等.

## 内容列表

- [背景](#背景)
- [安装](#安装)
- [使用说明](#使用说明)
- [示例](#示例)
- [API](#API)
- [维护者](#维护者)
- [License](#license)

## 背景

项目通用类扩展库, 对第三方库进行简单封装, 使方法/函数调用更加优雅, 只需维护一份代码即可, 其他项目直接引入.

## 安装

使用 **npm** 进行安装:

```shell
npm install @shared/extensions --registry=http://proxy.climb2fame.com:4873
```

或者使用 **yarn** 进行安装:

```shell
yarn add @shared/extensions --registry=http://proxy.climb2fame.com:4873
```

或者使用 **pnpm** 进行安装:

```shell
pnpm add @shared/extensions --registry=http://proxy.climb2fame.com:4873
```

## 使用说明

### fp 模块

```typescript
// 显式获取 Either 中的 Right 值
const resultE = right(1)
const result = get(resultE)

// 显式获取 Either 中的 Left 值
const resultE = left(Error('error'))
const result = getLeft(resultE)

// 显式获取 Either 中的值, 如果 Either 为 Left, 则获取 defaultValue
const resultE = left(Error('error'))
const result = getOrElse(resultE, false)

// 模式匹配, 对 Either 对象进行展开
const resultE = right(true)
match(
  resultE,
  (error) => {
    // left
  },
  (data) => {
    // right
  }
)
```

## 示例

想了解我们建议的规范是如何被应用的, 请参考 [examples](examples/).

## API

### fp 模块

| 名称 | 注释 | 参数 | 返回值 | 示例 |
| ---- | ---- | ---- | ------ | ---- |
|      |      |      |        |      |
|      |      |      |        |      |
|      |      |      |        |      |

## 维护者

[@MeePwn](https://github.com/maybewaityou).

## License

[MIT © MeePwn.](LICENSE)
