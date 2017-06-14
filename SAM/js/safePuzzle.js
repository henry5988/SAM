/*safePuzzle.js
* script for the safe mini puzzle in the story*/

/*safePuzzle()
* when the story goes to the safe puzzle section, this functions gets triggered and adds event listeners to button elements*/
function safePuzzle() {
    console.log('Executing script for safe puzzle.');
    var combination = []; //container for user input
    var answer = [6, 8, 9, 0]; //placeholder for correct puzzle answer
    console.log('safePuzzle answer:' + answer);

    for(var i = 0; i < 10; i++){
        $('#keypad' + i).on('click',
            {keyNum : i},
            function(event){
                if(combination.length < 4){
                    var nextPos = combination.length + 1;
                    combination.push(event.data.keyNum);
                    $('#safeInput' + nextPos).html(event.data.keyNum);
                console.log('current combination entered: ' + combination);
                }
            });
    }
    $('#submitButton').off().on('click', function(){ //unbind() function reference: https://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times
        console.log('submit button clicked');
        checkAnswer(answer, combination);
        combination = clearCombination();
    });
    $('#clear').off().on('click', function(){
        console.log('clear button clicked');
        combination = clearCombination();
    });
}

/*clearCombination
* clear user combination input*/
function clearCombination(){
    var combination = [];
    for(var i = 1; i < 5; i++){
        $('#safeInput' + i).html('');
    }
    return combination;
}

/*checkAnswer
* checks user input against the predefined answer*/
function checkAnswer(answer, combination) {
    if (combination.equals(answer)) {
        console.log("You got it");
        var safeSuccessIndex = searchForTextObjIndex(mainArray, 'safeSuccess');
        loadNextStory(safeSuccessIndex); //
        displayRotation++;               // This block has been repeated several times, needs refactoring
        printContent(displayRotation);   //
        checkPuzzleHide();
    } else {
        console.log("Try again");
        var safeFailedIndex = searchForTextObjIndex(mainArray, 'safeFail');
        loadNextStory(safeFailedIndex);
        displayRotation++;
        printContent(displayRotation);
        checkPuzzleHide();
    }
}

Array.prototype.equals = function (array) { //Array equals method.
    //Reference: http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
    if (!array)
        return false;
    if (this.length != array.length)
        return false;
    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}

