function component(text) {
  const element = document.createElement('h1')

  element.textContent = text

  return element
}

document.body.prepend(component('Проект создан на Webpack!'))