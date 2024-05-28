const func = (value: number) => {
    return value
}

const callback = (numFunc: (val: number) => number) => {
    console.log(numFunc(99));

}

callback(func)

