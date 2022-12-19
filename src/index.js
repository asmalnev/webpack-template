import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'

import './main.scss'
import './fonts/fonts.scss'

function component(text) {
  const element = document.createElement('h1')

  element.textContent = text

  return element
}

document.body.prepend(component('Проект создан на Webpack!'))

ReactDom.render(<App />, document.getElementById('root'))