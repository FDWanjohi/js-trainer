let my_arr= [23, "Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76,"John"]
// Display:
// 1. KES
console.log(my_arr[3][2]["currency"])
// 2. 560
console.log(my_arr[2])
// 3. Maths
console.log(my_arr[3][1])

// 4. In the object with the key currency, add another key “amount” with value 90
my_arr[3][2]["amount"] = 90
console.log(my_arr[3][2])

// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.

// 6. Change the name “John” to “Jane” . 

