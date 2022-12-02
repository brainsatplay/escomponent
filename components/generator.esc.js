export const __animate = 10

export const start = 0

export const __onconnected = function () {
    this.start = Date.now()
}

export default function () {
    return Date.now() - this.start
}