function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num:number): void {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => number){
    const result = n1 + n2;
    const resultcb = cb(result)
    console.log(resultcb + 10)
}

printResult(add(5, 12))

let combinedValues: (a: number, b: number) => number;

combinedValues = add

console.log(combinedValues(8,8))

addAndHandle(10, 20, (result) => {
    console.log(result)
    return result
})