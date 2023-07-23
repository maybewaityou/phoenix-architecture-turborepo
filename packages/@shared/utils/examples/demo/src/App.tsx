/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { delay, to, toE } from '@shared/utils'
import { match } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  async function handleClick() {
    await delay(1000)
    setCount((count) => count + 1)
  }

  async function handleToClick() {
    const [error, result] = await to(Promise.resolve(true))
    console.log(`== error ===>>>> ${error}`)
    console.log(`== result ===>>>> ${result}`)
  }

  async function handleToEClick() {
    const resultE = await toE(Promise.resolve(true))
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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>delay useCase: count is {count}</button>
        <button onClick={handleToClick}>to useCase Button</button>
        <button onClick={handleToEClick}>toE useCase Button</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
