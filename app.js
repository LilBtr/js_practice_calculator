// const getElement = document.getElementById('container')
// console.log(getElement.textContent)

// getElement.textContent++

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const submitBtn = document.getElementById('submit')
const wholeResult = document.getElementById('whole')
const remainderResult = document.getElementById('remainder')
const remainderDisplay = document.getElementById('remainder_active')
let action

plusBtn.onclick = function () {
	action = '+'
}
minusBtn.onclick = function () {
	action = '-'
}
multiplyBtn.onclick = function () {
	action = '*'
}
divideBtn.onclick = function () {
	action = '/'
}

function resultAction (number) {
	if (number < 0) {
		result.style.color = 'red'
	} else {
		result.style.color = 'green'
	}
	result.textContent = number
}

function computeNumbers (num1, num2, actionSymbol) {
	const n1 = parseFloat(num1.value)
	const n2 = parseFloat(num2.value)
	// 	debugger // останавливает код для дебага
	if (actionSymbol == '+') {
		remainderDisplay.style.display = 'none'
		return n1 + n2
	} if (actionSymbol == '-') {
		remainderDisplay.style.display = 'none'
		return n1 - n2
		//----------------------------------------------
		// if (actionSymbol == '+') {
		// 	remainderDisplay.style.display = 'none'
		// 	return n1 + n2
		// } if (actionSymbol == '-') {
		// 	remainderDisplay.style.display = 'none'
		// 	return n1onSymbol == '+' ? n1 + n2 : num1 - num2
		// '?' - Тогда - n2
		//----------------------------------------------
		// return acti ; ':' - Иначе
		//----------------------------------------------
	} if (actionSymbol == '*') {
		remainderDisplay.style.display = 'none'
		return n1 * n2
	} else {
		remainderDisplay.style.display = 'block'
		wholeResult.textContent = parseInt(n1 / n2)
		remainderResult.textContent = parseInt(n1 % n2)
		return n1 / n2
	}
}

submitBtn.onclick = function () {
	resultAction(computeNumbers(input1, input2, action))
}