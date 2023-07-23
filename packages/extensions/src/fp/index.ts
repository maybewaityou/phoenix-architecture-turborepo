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

export function get<E, T>(result: Either<E, T>): T {
  const target = getOrElse(result, null)
  if (target === null) throw Error('no value error')
  return target
}

export function getLeft<T, E>(result: Either<E, T>): E {
  return pipe(
    result as Either<E, never>,
    getOrElseF((error) => error)
  )
}

export function getOrElse<E, T>(result: Either<E, T>, defaultValue: T): T {
  return pipe(
    result,
    getOrElseF(() => defaultValue)
  )
}

export function match<E, T, B>(
  result: Either<E, T>,
  onLeft: (e: E) => B,
  onRight: (a: T) => B
): B {
  return pipe(result, matchF(onLeft, onRight))
}

export function fold<E, T, B>(
  result: Either<E, T>,
  onLeft: (e: E) => B,
  onRight: (a: T) => B
): B {
  return match(result, onLeft, onRight)
}
