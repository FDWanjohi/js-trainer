let values = [1,2,3,"Mango","Apples",true]
console.log(values)
console.log(values[4])

values[5] = false
console.log(values[5])

console.log(values.length)

values.push(8,9,"hp")
values.unshift("oranges",340)
console.log(values)

values.pop([5])
console.log(values)

console.log(values.at(3))
console.log(values.at(-2))


let numbers1 = [1,2,3,4]
let numbers2 = [5,6,7,8]
let combined = numbers1.concat(numbers2)
console.log(combined)


let combined2 = [...numbers1,...numbers2]
console.log(combined2)