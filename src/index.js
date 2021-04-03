/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import MiButton from './components/Button'

const App = () => (
  <div>
    <MiButton />
    <MiButton title="hey" onClick={() => alert('hey')} />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
