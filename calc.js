
function sum(a, b) {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const mult = (a, b) => {
    return a * b
}

const div = (a, b) => {
    return a / b
}

// console.log(sum(num1, num2))
// console.log(sub(num1, num2))
// console.log(mult(...[num1, num2]))
// console.log(div(...[num1, num2]))

exports.sum = sum
exports.sub = sub
exports.mult = mult
exports.div = div
