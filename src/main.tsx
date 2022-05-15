import React from 'react'
import ReactDOM from 'react-dom/client'
import invariant from 'tiny-invariant'
import { App } from './app'

const root = document.getElementById('root')

invariant(root, 'Root element not found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
