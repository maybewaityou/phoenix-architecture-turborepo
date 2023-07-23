/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { left, right } from 'fp-ts/Either'
import { describe, expect, it } from 'vitest'
import { get, getLeft, match } from '../src/index'

describe('fp suite', () => {
  it('test [get] function', () => {
    const resultE = right(1)
    const result = get(resultE)
    expect(result).to.be.equal(1)
  })

  it('test [getLeft] function', () => {
    const resultE = left(Error('error'))
    const result = getLeft(resultE)
    expect(result.message).to.be.equal('error')
  })

  it('test [match] function', () => {
    const resultE = right(true)
    match(
      resultE,
      (error) => {
        expect(error).to.be.null
      },
      (data) => {
        expect(data).to.be.true
      }
    )
  })
})
