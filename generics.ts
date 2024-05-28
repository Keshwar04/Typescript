//example 1
const arrayValues = <T>(val: T[]): T[] => {
    return val
}

console.log(arrayValues<number>([1, 2, 3, 4, 5]));
console.log(arrayValues<string>(['a', 'b', 'c', 'd']));


// example 2
type Storage1<T> = {
    local: string,
    session: T
}

const storage1: Storage1<string> = {
    local: 'localStorage',
    session: 'sessionStorage'
}


// example3
type Storage2<T> = {
    local: string,
    another: T
}

const storage2: Storage2<{ cookies: string }> = {
    local: 'localStorage',
    another: {
        cookies: 'cookiesSrorage'
    }
}

//example4
//Multiple generics with optional
type Storage3<T, T1, T2 = string> = {
    local: T,
    session: T2
    another: T1
}

const storage3: Storage3<string, { cookies: string }> = {
    local: 'localStorage',
    session: 'sessionStorage',
    another: {
        cookies: 'cookiesSrorage'
    }
}


//example 5
type myArr<T> = T[]

const arr5: myArr<number> = [1, 2, 3, 4, 5]


