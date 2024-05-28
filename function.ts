//parameters
const fun = (str: string) => {
    console.log(str);
}
fun('ram')


//optional parameters
const fun1 = (str: string, value?: number) => {
    console.log(str, value);
}
fun1('ram', 99)
fun1('jai')


// Return type
//Not return anything means void
const fun2 = (): number => {
    return 99
}
fun2()

