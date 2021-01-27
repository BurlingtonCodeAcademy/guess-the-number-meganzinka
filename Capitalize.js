function capitalize (word) {
    let newWord = word.toLowerCase().trim();
    let newFirst = newWord[0].toUpperCase()
    return newFirst + newWord.slice(1)  
}

console.log(capitalize("hELLO"));

function changeIntoArray (string) {
    let newArray = string.split(" ")
    newArray = newArray.join("")
    return newArray 
}

let someString = ("Hello hello and happy Wednesday to all") 

console.log(changeIntoArray(someString))