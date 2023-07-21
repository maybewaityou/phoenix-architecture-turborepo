/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
'use client'

import { useState } from 'react'
import { delay } from 'shared-utils'
import { Header } from 'ui'

export default function Page() {
  const [state, setState] = useState(0)

  async function handleClick() {
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