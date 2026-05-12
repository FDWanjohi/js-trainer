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