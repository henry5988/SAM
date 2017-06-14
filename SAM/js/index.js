/**
 * index.js
 * General javascripts that contains function that manipulate data objects in mainText.js
 */

/*CONSTANTS*/
var NUMOFITEMS = 4;

var gameStory = new List(); //initiate a new List of gameStory

/*Function executions that requires the DOM to load first*/
window.onload = function () { //wait until the html DOM is constructed
    startGame(); //calls the start game function which is defined below
};

/*Variables*/
var mainArray = []; //Array for holding MainText objects
var choiceArray = []; //Array for Choice objects
var puzzleArray = [];
var itemArray = [];
var currentSound = "";
var pronoun = '';

/*Functions*/

/*startGame()
* pre:
* setup for the initial state of the game*/
function startGame(){
    console.log('Game initiating, constructing story content');
    mainArray = []; //clear mainArray
    choiceArray = []; //clear choiceArray
    console.log('constructing story objects');
    textObj(); //convert all story texts to text objects and put them in mainArray
    console.log('Main text array constructed ');
    choiceObj(); //convert all choice texts to text objects and put them in choiceArray
    console.log('Main choice array constructed ');
    itemObj();
    console.log('Item array constructed');
    puzzleObj(); // convert all puzzle objects into the form usable in the story
    console.log('Main puzzle array constructed ');
    var startingAreaIndex = searchForTextObjIndex(mainArray, 'startingbedroom'); //get the index of the starting bed room
    loadNextStory(startingAreaIndex); //load first part of the story to story container
    printContent(displayRotation); //print the display rotation index from list to html document according to nav.js
}

/* setPronoun()
 * parameter: html user input for their choice of pronoun
 * creates an array to store pronoun info*/
function setPronoun(pronounElement){ //TODO add pronoun checking functionality
    var pronounArr = pronounElement.value.split(' '); //split the pronoun element by space then assign to an array
    pronoun = pronounArr; // assign array to pronoun for uses on all pages
}

/* parseParagraph()
 * parameter: string of the text content of the page
 * parses the paragraph by individual sentences, returns an array containing those sentences*/
function parseParagraph(p){
    var textArray = p.match(/[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/g); //separate the string base on period, question mark, exclamation and quotes using regex
    // regex reference: https://stackoverflow.com/questions/5553410/regular-expression-match-a-sentence
    console.log('*SPOILERS* Story Text for the Area');
    console.log(textArray); //Tread carefully with this log. Heavy spoiler within this sentence separated array.
    //TODO finish pronoun check
    return textArray;
}

/*checkPronoun()*/
function checkPronoun(){
    var regular, possessive, passive, reflective;
    var playerChoice = $('#pronoun').value;
    if(playerChoice === 'he'){
        regular = 'he';
        possessive = 'his';
        passive = 'him';
        reflective = 'himself'
    }else if(playerChoice === 'they') {
        regular = 'they';
        possessive = 'their';
        passive = 'them';
        reflective = 'themselves'
    }else{
        regular = 'she';
        possessive = 'hers';
        passive = 'her';
        reflective = 'herself';
    }
    return [regular, possessive, passive, reflective];
}

/*changePronoun
* using Tracery library
* */
function changePronoun(sentence, pronounArray){

    var words = {
        pronouns:{
            "regular": pronounArray[0],
            "possessive": pronounArray[1],
            "passive": pronounArray[2],
            "reflective": pronounArray[3],
            "origin": sentence
        }
    }
}

/*setPronoun
* sets the pronoun for the passed-in sentence to pronoun selected by the user
* */
function setPronoun(sentence){
    var pronounArray = checkPronoun();
    changePronoun(sentence, pronounArray);
}

/*itemObj
* creates all in game item and push them to itemArray*/
function itemObj(){
    var itemID, itemName, itemImg;
    var itemNames = ['Smartphone', 'Bone', 'Small note', 'Car key'];
    var itemImgs = ['phonedecoder.jpg', 'dogbone.jpg', 'smallnote.jpg', 'carkey.jpg'];
    for(var i = 0; i < NUMOFITEMS; i++){
        itemID = i;
        itemName = itemNames[i];
        itemImg = itemImgs[i];
        itemArray.push(new Item(itemID, itemName, itemImg));
    }
}

/* textObj()
 * parameter: empty
 * Looks into the mainText and create the text objects usable to main functions*/
function textObj(){
    console.log("sound for openDoor" + sound.openDoor);
    var mainTextArray;
    for(var key in mainText){
        if(!mainText.hasOwnProperty(key)) continue; //if the key is not a property in mainText due to possible prototype later added then skip the loop
        var textObj = mainText[key]; //assign the object with the key in mainText to textObj
        mainTextArray = parseParagraph(textObj.content); //parse the paragraph into sentences and assign them to mainTextArray
        var textObjImg = textObj.imgsrc;
        var imgsrc = '';
        imgsrc = textObjImg === '' ? '../static/white.svg' : '../static/' + textObjImg; //set image source to white.svg if it was null in data, else set to the image source indicated
        for (var i = 0; i < mainTextArray.length; i++) { //for loop to create main array that holds MainText objects
            setPronoun(mainTextArray[i]);
            if(i<mainTextArray.length-1){ //if the sentence is not the last sentence in the array, that means it's not followed by a choice section
                mainArray.push(new MainText('mainText', key, mainTextArray[i], imgsrc, pronoun, -1, mainTextArray.length-1, sound[key])); //create a new MainText object and push it to the main array
            }else{ //the sentence does follow by a choice section
                mainArray.push(new MainText('mainText', key, mainTextArray[i], imgsrc, pronoun, textObj.choiceSet, mainTextArray.length-1, sound[key])); // create a new MainText object with a choice tag
            }
        }
    }

}

/*playSound*/
function playSound (soundFile){
    console.log('playing soundFile:' + soundFile);
    if (soundFile === undefined || soundFile == null || soundFile.length <= 0) return;
    if (soundFile !== currentSound) {
    var audio = new Audio("../sound/" + soundFile); 
    console.log ("playing audio:" + audio); 
    audio.play(); 
    currentSound = soundFile;
    }

}

/*choiceObj()
* Looks into the choice object and create all corresponding choice objects using the Choice Constructor*/
//TODO finish choice construction
function choiceObj(){
    for(var key in choiceSet){ //for each object in choiceText
        if(!choiceSet.hasOwnProperty(key)) continue; //if the key is null in choiceText then skip the iteration
        var choiceObj = choiceSet[key]; //assign the object inside choiceText to choiceObj
        var optionsContentArray = []; //assign empty optionsArray
        var optionsItemArray = []; //assign empty item array
        var optionsItemReqArray = []; //assign empty item requirement array
        var leadArray = []; //assign empty text lead array
        for(var option in choiceObj){ //for each option in choice object
            optionsContentArray.push(choiceObj[option].content); //add the text content of the option to the options array
            optionsItemArray.push(choiceObj[option].itemGain); //add the item gain from that option to the options array
            optionsItemReqArray.push(choiceObj[option].itemReq); //add the item requirement from that option to the options array
            leadArray.push(option); //add the title of the next text object after choosing this option to the lead array
        }
        choiceArray.push(new Choice('choiceSet', key, optionsContentArray, optionsItemArray, optionsItemReqArray, leadArray)); //create a new choice object and push it to the choiceArray
    }
}

/*puzzleObj()
* Creates puzzle objects using the Puzzle constructor
* */
function puzzleObj(){
    for(var key in puzzle){
        if(!puzzle.hasOwnProperty(key)) continue; //if the key is null in puzzle then skip the iteration
        var puzzleObj = puzzle[key]; //assign the object inside puzzle to puzzleObj
        var puzzleFunction = puzzleObj.content; //assign function from content of puzzleObj
        var fail = puzzleObj.failCondition; //assign fail condition string
        var success = puzzleObj.successCondition; //assign success condition string
        var abort = puzzleObj.abortCondition; //assign abort condition string
        puzzleArray.push(new Puzzle('puzzle', key, puzzleFunction, fail, success, abort, 0)); //push a new Puzzle object to the puzzle array
    }
}

/* searchForTextObjIndex()
 * parameter: mainArray that holds all text objects, name of the text section looking for*/
function searchForTextObjIndex(mainArray, textName){
    var i = 0; //initiate iterator to be 0
    var objArray = mainArray; //assign array passed in to objArray
    var objName = objArray[i].name; //assign the name of first item in the array to objName
    while(objName !== textName){ //if objName is not textName, which is the name we are looking for
        i++; //increment the iterator
        objName = objArray[i].name; //set objName to the next item in the array
    } //reiterate the loop if the item has not been found yet
    return i; //if the matching item name is found we return the index such item is in the array
}

/*loadNextStory
* pre: currentStory container, storyIndex in the story text array
* load the next part of the story along with the next choice follow at the end of the text*/
function loadNextStory(storySectionIndex){
    console.log('Loading next part of the story');
    //the loop goes from the story index passed in to the end index indicated as a value of the object
    for(var i = storySectionIndex; i <= storySectionIndex + mainArray[storySectionIndex].end; i++){ // storySectionIndex + .end = the position to end on in the overall mainText array
        addToGameStory(mainArray[i]); //add one sentence object to the story list during each iteration of the loop
    }
    var choiceID = gameStory.getEnd().content.choiceTrigger; //get the ID to the next decision point
    console.log('Next story section ID: ' + choiceID); //logs the next story section to console
    if(typeof choiceID === 'string' || choiceID instanceof String){ //if choice ID is a string. Reference source: http://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string
        if(choiceID === 'safeOutcome'){ //if next text is the safe puzzle
            console.log(puzzle.safePuzzle);
            var safePuzzle = puzzleArray[0];
            addToGameStory(safePuzzle);
            return;
        }
        var choiceIDIndex = searchForTextObjIndex(mainArray, choiceID); //search for the choice this next part of text leads to
        console.log('Recursive load function with choiceIDIndex: ' + choiceIDIndex);
        loadNextStory(choiceIDIndex); //recursively load the next part of text to the story queue
        return; //return to upper level of the recursion
    } //if the next part of the story indeed leads to a choice then the program lands here
    console.log('Loading next choice section');
    var choiceObj = choiceArray[choiceID]; //assign the choice object to variable choiceObj //TODO may want to change to a matching function; right now the choiceID corresponds to array index
    addToGameStory(choiceObj); //load choice module to the story list
    console.log('Length of gameStory list after loading: ' + gameStory.getLength());
}

/*addToGameStory
* pre: objects to add to story list
* add object to game story list and record its position in the object
* */
function addToGameStory(obj){
    console.log('loading story piece: ' + obj.name);
    gameStory.addNode(obj);
    console.log('current story length: ' + gameStory.getLength());
    obj.position = gameStory.getLength() - 2;
}

/*printContent()
* pre: display rotation number
* prints the content of the current story list element*/
function printContent(displayRotation){
    console.log("printing content");
    var currentStoryObj = gameStory.getNode(displayRotation); //get the story object from container
    var currentStoryType = currentStoryObj.type; //get the type of current story object node
    var currentStoryContent = currentStoryObj.content;
    var currentStoryImage = '<img class="illustration img-fluid" src="' + currentStoryObj.imgsrc + '"/>';
    var currentStorySound = currentStoryObj.sound;
    if(currentStoryType === 'choiceSet'){ //if the content in the list is an array
        printOptions(currentStoryObj); //print the options array
    }else if(currentStoryType === 'mainText'){ //the content is a string
        document.getElementById('image').innerHTML = currentStoryImage; //print the image to html
        document.getElementById('mainText').innerHTML = currentStoryContent; //print the sentence to html page
        playSound(currentStorySound);
        checkItemGain(currentStoryObj);
    }else{ //if the content is a puzzle
        printPuzzle(currentStoryObj);
    }
}

function checkItemGain(currentStoryObj){
    var objName = ['startingbedroom_noPhone', 'checkDrawer_bone', 'safeSuccess_note', 'giveBone_key'];
    var itemNum = [0, 1, 2, 3];
    for(var i = 0; i<objName.length; i++){
        if(currentStoryObj.name === objName[i]){
            currentStoryObj.itemGain(itemNum[i]);
        }
    }
}

function checkItemLost(choiceObj, optionIndex){
    var objName = ['giveBone_key', 'walkAround'];
    var itemNum = [1, 0];
    for(var i = 0; i<objName.length; i++){
        if(choiceObj.textLead[optionIndex] === objName[i]){
            itemArray[i].itemLost(itemNum[i]);
        }
    }
}

/*printPuzzle
* pre: content for mini puzzle
* prints the playable puzzle in the parameter to the screen
* */
function printPuzzle(puzzleObj){
    console.log('printing puzzle');
    $('#mainText').html('');
    var functionName = puzzleObj.content;
    console.log('The name of the puzzle: ' + functionName);
    window[functionName]();//run the function with its function name. Reference: https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
}

/*printOption
* pre: content for the options menu
* prints the choices the player can choose at certain point of the story*/
function printOptions(optionObj){
    console.log('printing Options');
    var optionTextContent = optionObj.content; //get the text array from story object
    var optionTextLead = optionObj.textLead; //get the text array for after choosing the option
    var optionPicked = optionObj.isPicked; //get the picked status of each option
    var optionsText = '<div class="list-group">'; //define optionsText to be an unordered list

    console.log('printing option: ' + optionTextContent);
    console.log(optionTextLead);
    for(var i = 0; i < optionTextContent.length; i++){ //for each option object in the option set
        if(optionPicked[i] === false && isItemOwned(optionObj.itemReq[i])){ //if any of the option is not picked before
            optionsText += '<a class="list-group-item list-group-item-action choice" id="'+ optionTextLead[i] +'">' + optionTextContent[i] + '</a>'; //add a html anchor for each option
        }
    };
    optionsText += '</div>'; //close the unordered list with a closing tag
    document.getElementById('mainText').innerHTML = optionsText; //change the mainText element to the option list just created
    addChoiceEvent(optionObj); //add event listeners to each options
}

/*addChoiceEvent
* pre: passes in the storyLead array, html elements that displays the choices
* add event listeners to player choices created and displayed on the page*/
//TODO Distinguish the definition of choice and option. A choice is a set of options
function addChoiceEvent(optionObj){
    //event listener for story options
    var optionTextLead = optionObj.textLead;
    var optionTextIndex = [];
    for(var i = 0; i<optionTextLead.length; i++){
        var choiceTarget = $('#'+ optionTextLead[i]);
        optionTextIndex.push(searchForTextObjIndex(mainArray, optionTextLead[i]));
        console.log('option text index: ' + optionTextIndex);
        //event listener when player click on an option, made using jquery. Reference: http://api.jquery.com/one/
        choiceTarget.one("click", { //jquery method for one-time events
            optionIndex: choiceTarget,
            orderIndex: i           //parameter passed in to the call-back function
        },function(event){
            console.log('data type passed into call-back: ' + event.data.optionIndex); //logs the data to see if it is passed in the function successfully
            var currentTargetIndex = event.data.orderIndex; //store the index of the li element from the unordered list
            console.log('Selected option: ' + currentTargetIndex);
            if(optionObj.choiceID !== '9'){
                optionObj.isPicked[currentTargetIndex] = true; //toggle on picked switch for this option
            }
            console.log('The option list pick state is now: ' + optionObj.isPicked);
            console.log('disabling anchors');
            $('a').attr("href", "#");
            checkItemLost(optionObj, currentTargetIndex);
            loadNextStory(optionTextIndex[currentTargetIndex]); //load the story according to this option
            gameStory.remove(displayRotation);
            console.log('click event triggered; next story added');
            printContent(displayRotation); //print next sentence
        });
    }
}

/*checkPuzzleHide*/
function checkPuzzleHide(){
    for(var i = 0; i < puzzleArray.length; i++){
        console.log('checking hide switch for puzzle: ' + puzzleArray[i].name);
        puzzleArray[i].hideSwitch();
    }
}

/*isItemOwned
* return true if the item is obtained by the player*/
function isItemOwned(itemNum){
    if(itemNum !== -1)
        return itemArray[itemNum].isOwned;
    return true;
}
