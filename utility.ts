type House = {
    BHK: number
    waterSupply: boolean,
    rent?: boolean,
    noOfChair: number
}

//omit rent only
type houseWithoutRent = Omit<House, 'rent'>

//pick rent and noOFChair
type houseWithRentAndChair = Pick<House, 'rent' | 'noOfChair'>

//Everything is optional
type optional = Partial<House>

//Everything is required
type required = Required<House>
