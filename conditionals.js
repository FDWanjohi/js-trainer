// let y = Number(prompt("Enter a number"))

// if(y%2==0){
//     console.log("Even number")
// }else{
//     console.log("Odd number")
// }


// let num1 = Number(prompt("Enter num1"))
// let num2 = Number(prompt("Enter num2"))
// let num3 = Number(prompt("Enter num3"))

// if ((num1 > num2) && (num1 > num3)){
//     console.log("Num1 is the largest")
// }else if((num2 > num1) && (num2 > num3)){
//     console.log("Num2 is the largest")
// }else{
//     console.log("Num3 is the largest")
// }

// let age = Number(prompt("20"))

// if ((age >= 18)){
//     console.log("Voter eligible to vote")}
//     else{
//         console.log("Voter not eligible to vote")
//     }

//     let username_length = Number(prompt("8"))

//     if ((username_length < 8)){
//         console.log("Username too short")
//     }else{"Username Correct format"}


    let x = Number(prompt("Enter Age"))
    let age = x>=18 ? "Eligible to Vote" : "Not Eligible to Vote"
    console.log(age)

    let marks = Number(prompt("Enter Marks"))
    if (marks>70){
        console.log("Student Grade is A")
    }else if(marks<=69 && marks>60){
        console.log("Student Grade is B")
    }else if(marks<=59 && marks>50){
        console.log("Student Grade is C")
    }else if(marks<=49 && marks>40){
        console.log("Student Grade is D")
    }else{
        console.log("Student Grade is F")
    }