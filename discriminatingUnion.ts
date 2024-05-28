type Car = { brand: 'BMW', model: string } | { brand: 'Audi', model: number } | { brand: 'Ford', model: any }

let car: Car = {
    brand: 'BMW',
    model: 'R1'
}

let car1: Car = {
    brand: 'Audi',
    model: 2345
}

let car2: Car = {
    brand: 'Ford',
    model: null
}