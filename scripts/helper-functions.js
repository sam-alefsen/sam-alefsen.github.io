const addClass = function addClass(element, className) {
  element.classList.add(className);
}

const handleClick = function handleClick(element, callback) {
  element.addEventListener('click', callback);
}

const removeClass = function removeClass(element, className) {
  element.classList.remove(className);
}

export {addClass, handleClick, removeClass};