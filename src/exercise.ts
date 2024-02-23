//Multiplication function
const multiplicationNumbers = (firstData: number, secondData: number): number =>{
    return firstData * secondData
}

const firstNumber: number = 100
const secondNumber: number = 5

console.log(multiplicationNumbers(firstNumber, secondNumber))

//Hello function
const sayHello = (nameEntered: string): string => {
    return `Hello ${nameEntered}`
}

const userNameEntered: string = 'Ana'

console.log(sayHello(userNameEntered))