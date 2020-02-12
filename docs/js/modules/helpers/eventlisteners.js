function addEvent(el, event, cb) {
    return el.addEventListener(event, cb)
}

export { addEvent };