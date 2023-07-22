/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { match } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { delay, to, toE } from '../../src/index'

function promise() {
  return new Promise((resolve) => resolve(true))
}

async function delayUseCase() {
  console.log('delayUseCase start')
  await delay(1000)
  console.log('delayUseCase end')
}

async function toUseCase() {
  const [error, result] = await to(promise())
  console.log(`== error ===>>>> ${error}`)
  console.log(`== result ===>>>> ${result}`)
}

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
  console.log(result)
}
