/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import type { Either } from 'fp-ts/Either'
import { getOrElse as getOrElseF, match as matchF } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

export function get<T>(result: Either<Error, T>): T {
  const target = getOrElse(result, null)
  if (target === null) throw Error('no value error')
  return target
}

export function getLeft<T>(result: Either<Error, T>): Error {
  return pipe(
    result as Either<Error, never>,
    getOrElseF((error) => error)
  )
}

export function getOrElse<T>(result: Either<Error, T>, defaultValue: T): T {
  return pipe(
    result,
    getOrElseF(() => defaultValue)
  )
}

export function match<T, B>(
  result: Either<Error, T>,
  onLeft: (e: Error) => B,
  onRight: (a: T) => B
): B {
  return pipe(result, matchF(onLeft, onRight))
}

export function fold<T, B>(
  result: Either<Error, T>,
  onLeft: (e: Error) => B,
  onRight: (a: T) => B
): B {
  return match(result, onLeft, onRight)
}
