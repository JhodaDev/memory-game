export const handleActive = (e, id) => {
  const element = e.currentTarget
  const active = document.querySelector(`.active.${id}`)
  if (element !== active) {
    active.classList.remove('active', `${id}`)
    active.classList.add('bg-gray-light')
    element.classList.add('active', `${id}`)
  }
}

export const showElement = (e) => {
  const element = e.currentTarget
  element.classList.add('temp-show')
  const allElements = document.querySelectorAll('.temp-show')
  if (allElements.length <= 2) element.classList.remove('hide')
}

export const validateElement = (element, isVisible) => {
  const { first, second } = element
  setTimeout(() => {
    first.classList.remove('temp-show')
    second.classList.remove('temp-show')
    if (isVisible) {
      first.classList.add('show')
      second.classList.add('show')
    } else {
      first.classList.add('hide')
      second.classList.add('hide')
    }
  }, 1000)
}
