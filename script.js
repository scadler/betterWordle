console.log("works")
var i = 0
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "U", "W", "X", "Y", "Z"]
var codeWord = ""
while(i<=3){
    codeWord += alphabet[Math.floor(Math.random())]
    console.log(codeWord)
    i++
}