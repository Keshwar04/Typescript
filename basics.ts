const num: number = 99
const numArr: number[] = [1, 2, 3]

//Generic array
const arr: Array<string> = ['a', 'b']

//Array tuples
const arr1: [number, string] = [1, 'a']

const arrOfObj: Array<{ a: number, b?: 'string' }> = [{ a: 1 }]

//Object
const obj: { a: string, b: number } = { a: 'karthi', b: 99 }

// Nest object with optional
const obj1: { nest: { a: number, b?: boolean } } = { nest: { a: 1 } }

//object function
const objFunc: { add: (num1: number, num2: number) => number } = { add: (a, b) => a + b }
objFunc.add(1, 2)
