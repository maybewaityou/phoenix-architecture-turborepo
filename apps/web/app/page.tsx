/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
'use client'

import { delay } from 'async'
import { useState } from 'react'
import { Header } from 'ui'

export default function Page() {
  const [state, setState] = useState(0)

  async function handleClick() {
    console.log('=========', state)
    await delay(1000)
    setState(state + 1)
  }

  return (
    <>
      <Header text="Web" />
      {/* <Button /> */}
      <div>{state}</div>
      <button onClick={handleClick}>button</button>
    </>
  )
}
