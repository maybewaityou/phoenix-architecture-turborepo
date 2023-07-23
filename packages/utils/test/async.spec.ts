/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { match } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { describe, expect, it } from 'vitest'
import { delay, to, toE } from '../src/index'

function promise() {
  return new Promise((resolve, reject) => resolve(true))
}

describe('async suite', () => {
  it('test [delay] function', async () => {
    await delay(1000)
    expect(true).to.be.true
  })

  it('test [to] function', async () => {
    const [error, result] = await to(promise())
    expect(error).to.be.null
    expect(result).to.be.true
  })

  it('test [toE] function', async () => {
    const resultE = await toE(promise())
    pipe(
      resultE,
      match(
        (error) => {
          expect(error).to.be.null
        },
        (data) => {
          expect(data).to.be.true
        }
      )
    )
  })
})
