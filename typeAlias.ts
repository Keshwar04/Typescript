type Name = Array<number | string>

const arr3: Name = [12]

type Person = {
    fName: string,
    lName?: string,
    address?: {
        doorNo: number,
        streetName: string
    }
}

const objP: Person = {
    fName: 'karthi'
}