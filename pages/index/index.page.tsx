import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  assert(2==3)
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
