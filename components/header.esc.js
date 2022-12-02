
export const  __element = 'h2'

export let text = 'Header'

export const __onconnected = function () {
    this.__element.innerText = this.text
}

export const __attributes = {
    innerText: text
}
