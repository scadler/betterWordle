var i = 0
var alphabet = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]
var letterList = [""];
var codeWord = [""];
var state = {
    guessNumber: 0,
    codeWordIndex: [""],
}
while(i<=3){
    if(i===0){
        letterList = alphabet;
    }
    var index=Math.floor(Math.random()*letterList.length)
    codeWord += letterList[index]
    letterList.splice(index, 1);
    console.log(codeWord + " " + letterList + " " + index)
    i++
    if(i>=3){
        $("#outputDebug").text(codeWord);
    }
}

$("#debugButton").click(function(){
    var guess = $("#guessOne").val().toUpperCase();
    
    console.log(guess)
    $("#attemptsContainer").append(`<div id="guess${state.guessNumber}" class="guess"><h1>${guess}</h1></div>`);
    state.guessNumber++
    if(guess === codeWord){
        console.log("works")
    }
});
