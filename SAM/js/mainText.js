/*
 * mainText.js
 * Dataset for the game as well as constructors for game objects*/

/*mainText
* contains the text as a long string and the choice ID it leads to*/
var mainText = {
    //when player enter this area for the first time
    //TODO change content lines to not be single lined.
    corridor:{
        
        content:"On the other side of the door is a dark corridor. The only remedy for any source of illumination are four dim lights on the right corridor wall. \"Who uses colored lights in their house?,\" Sam thinks, confused by the unique lighting design of the house. Sam begins to walk down the corridor slowly. Stopping at what seems to be the middle of the lane, the end of the hallway barely visible, she sees two doors to the left and right of her.",
        choiceSet: 1,
        imgsrc: 'lights.png',

    },
    startingbedroom: {
        
        content: 'Sam wakes up with an unusual headache. She remembers the last time she had this kind of pain was the morning when she woke up after having one too many drinks at a graduation party in college. But that is not the strangest thing she notices about this morning. Everything is different: different ceiling, different bed, even the air smells a bit off. It smells like some animal; she is not quite sure. Sam notices her smartphone is where she would normally place it before she goes to sleep, on the bedside cabinet right beside her pillows. Maybe she has misplaced herself into someone else\'s house. After all, she does feel this headache that brings regrettable memories along with it.',
        choiceSet: 'startingbedroom_noPhone',
        imgsrc: 'bedsidetable.jpg',
    },
    startingbedroom_noPhone:{
        content: 'She picks the phone up before looking out a tiny window by the bed. There is nothing outside that she recognizes, just endless blades of grass waving along in the wind. There is a door across from the bed. It does not look like a door that leads to the outside; nonetheless, Sam sincerely hopes that the door better not be locked.',
        choiceSet: 0,
        imgsrc: 'bedsidetable_noPhone.jpg'
    },
    attic: {
        
        content: 'After climbing some very steep and poorly lit stairs, Sam arrives in front of an old oak door. She hesitates for a second. \"What am I doing? I should just try to get out of this scary place before things turn bad...\". But her curiosity pushes her hand to turn the handle and open the door. A violent airstream suddently freezes her entire body and slams the door behind her. Raising her head, she can see an open skylight, providing enough light to distinguish her environment, and a small circular window overlooking a poorly maintained garden. The room is empty except an old rolled up carpet along the wall, and a dusty closet in the corner. Just as she is about to leave the attic, she feels her back pocket vibrate. Surprised to finally have cell reception, she grabs her phone and answers to an unknown number. \"Hello?\" she says with an intimidated voice. \"Hello Sam. Are you having fun walking around on my property?\", a raucous voice asks, \"You are being very intrusive right now. I think it is time for you to leave... before I come and make you leave.\" ',
        choiceSet: 5,
        imgsrc: 'window1.jpg',
    },
    basement: {
        
        content: 'Sam opens the door to a dimly lit basement. The smell of damp rust and burnt engine oil permeates the air. Fluorescent lights flicker above her head, their bulbs draining away toward an eminent, but certain death. There are over a dozen cars parked uniformly throughout this large, cold, concrete room. It appears to be an underground parking garage. Sam s eyes are drawn to an angular shape of light crawling its way across the floor. She notices that the garage door is slightly ajar, allowing a thin stream of sunlight to warm the cement floor.  Escape is within reach. As she takes a step toward the light, she notices a room to her left.  It has two windows with a door sandwiched between them. The windows reveal the contents of the room: empty, except for a lonely old computer sitting atop a wooden desk.',
        choiceSet: 6,
        imgsrc: '',
    },
    leftroom: {
        
        content: '\"Bark, Bark!\" A big dog suddenly swoops out from the corner of the room, leaping towards Sam before a chain tied to its collar stops it in its tracks. \"Woah!\" she yells, stunned by the near-ambush. Sam backs up a few steps before realizing she is in no immediate danger from this aggressive beast. Even though the dog is wearing a collar, its lean body makes it more like a wild wolf, staring at Sam hungrily. Behind the dog lies a golden metal box that looks more valuable than the entire house itself. The luminesence of the metalwork sends warm invitation to anyone who could lay eyes on it. The dog\'s eyes, on the other hand, spell the words STAY AWAY loud and clear. Sam almost freezes in place, as if the floor has transformed into ice water, that sending chills right up her spine. Even though Sam wants to immediately leave this room, she spots something shiny behind where the dog is standing. It looks like a metal box.',
        choiceSet: 3,
        imgsrc: 'viciousdog.jpg',
    },
    rightroom: {
        
        content: 'The only light source in this room is a very ordinary floor lamp that is clearly positioned to shine its light on a small safe in the corner of the room. This safe does not look any more special than any other Sam has seen before. However, as she inspects it more, she discovers that the safe has several wires connected on the back and leading into the wall. \"Is this some sort of extra high-tech safe?\" Sam thinks to herself, \"I wonder what is inside.\"',
        choiceSet: 2,
        imgsrc: 'safe.jpg',
    },
    stairs: {
        
        content: 'Stepping across the old wooden floor is certainly not the best way to stay quiet, but aside from her own footsteps, Sam could not really hear any other sound in the house. "\No sound means no one is secretly moving around me or following me, right?\". Trying not to think about who, or what, could potentially be hiding in this house, Sam reaches the end of the corridor to reveal a small staircase before her. Above the stairs is a closed hatch that appears to lead to an attic. The stairs leading beneath disappear into a dark abyss. \"Maybe downstairs is the basement, but do I really want to go down there?\" Sam thinks this could be the most serious question she would ever asked herself. \"What good could come out of venturing downward? Could there be a way outta here?\" These questions forced themselves into her train of thought, making her head spin faster than it already has.',
        choiceSet: 4,
        imgsrc: '',
    },
    controlroom: {
        
        content: 'As she enters in the room, Sam observes its contents: the room is empty, except for a large black and white poster representing Frank Zappa during a live performance in 1977 and for a lonely old computer sitting atop a wooden desk.',
        choiceSet: 7,
        imgsrc: '',
    },
    //when player choose this option
    //    in the starting bed room
    callForHelp:{
        
        content: 'Sam pulls out her phone, and begins to dial 9-1-1. On the other end, however, is the very familiar empty dial tone. \"Ugh, classic, outside of service range,\" she says, expressing her sentiment. Sam does not seem to be distraught by the response of her incompetent phone but, is rather disappointed.',
        choiceSet: 0,
        imgsrc: '',
    },
    openDoor:{
        
        content: 'To Sam\'s surprise, the door opened on the first try. No trying to pick the lock, no banging to see if someone is on the other side, no open sesame, just opened with a simple twist of the wrist. Nothing scary popped out either, just some creaking sound from the old wooden house. Everything suddenly looks a bit normal for a moment.',
        choiceSet: 'corridor',
        imgsrc: '',
    },
    checkDrawer:{
        
        content: 'Under unknown situations, poking around might be very dangerous, but Sam holds a different mentality. She opens the bedside cabinet and peeks inside. After all, there might be a key that leads to the outside, or better yet, a map that marks where are on Earth she actually is, IF she is still on Earth. "Is that a bone?" She thinks to herself, "Never know what is useful... I guess." ',
        choiceSet: 'checkDrawer_bone',
        imgsrc: '',
    },
    checkDrawer_bone:{
        content: 'A little hesitantly, she picks up the bone and puts it in her left pocket.',
        choiceSet: 0,
        imgsrc: ''
    },
    //    in the corridor
    openRightDoor:{
        
        content: 'Examining the door that is right beside the four colored lights, Sam wonders if she can decode the meaning of the lights behind the minimally decorated entrance. She begins to slowly turn the door knob, hoping nothing will jump out from behind the door. Sam is surprised that she does not see any flashy light in this room. In fact, there is barely any light at all. ',
        choiceSet: 'rightroom',
        imgsrc: '',
    },
    openLeftDoor:{
        
        content: 'The door on the left does not look any more special than the other; however, a strong animal smell seems to be coming from the room behind this door. Sam holds her breath and quickly opens the door, wondering why she would want to open a door that leads to the world\'s stinkiest odor in the first place.',
        choiceSet: 'leftroom',
        imgsrc: '',
    },
    continueDownHall:{
        
        content: 'Not risking confronting any danger that might hide behind doors, Sam chose to go straight through the dark yet somewhat visible corridor.',
        choiceSet: 'stairs',
        imgsrc: '',
    },
    //    in the right room
    openSafe:{
        
        content: 'The power of curiosity is perhaps too great for Sam to resist. "What is the worst that could happen?" Sam thinks, as she looks at the keypad on the safe to try and figure out how to unlock this mysterious box. To the left of the keypad is a strange symbol that resembles a light bulb, and Sam wonders what this could possibly mean.',
        choiceSet: 'safeOutcome',
        imgsrc: 'safePuzzleKey.jpg',
    },
    returnToCorridor: {
        
        content: 'Perhaps out of guilt, or just plain laziness, Sam does not want to bother with the safe. She is proud of her well-maintained conscience and the fact that she is able to persist with it has caused her to double down on that feeling. Nothing in the room seems worth the notice, Sam decides to return to the corridor and look for another way.',
        choiceSet: 1,
        imgsrc: '',
    },
    // in the left room
    giveBone: {
        
        content: 'Reaching for the bone she just picked up moments ago, Sam approaches the hungry dog cautiously. She extends her arm, holding the bone until the dog\'s eyes are fixated on it. Then she tosses the bone up in the air. It flies for less than half a second before the dog leaps upward and snatches it. Sam quickly side steps around the feasting dog, and hastily retrieves the metal box the dog is guarding. Running back out to the corridor, Sam almost feels like a seasoned adventurer rather than someone who doesn\'t even know where the hell she is. \"A bone for a metal box of glittering treasure, seems like a fair trade,\" Sam thought to herself. Having this amount of high hope certainly does not help her when she finds out what is in the box looks like a very normal car key. \"Ugh, what? That\'s it?\"',
        choiceSet: 'giveBone_key',
        imgsrc: ''
    },
    giveBone_key: {
        content: 'Clearly not satisfied with what she found, Sam put the key away and start searching for another way out.',
        choiceSet: 1,
        imgsrc: ''
    },
    walkAround: {
        
        content: 'Sam tries to walk around the dog despite it staring at her viciously. The closer she gets to the metal box the closer she can feel the dog eagerness to pounce on her, but at the same time, the desire to know what is inside that box grows ever more stronger. When she is within a few feet from the box, Sam reaches out her hand to try and grab it before standing too close. But before she can actually touch the box, the ferocious creature attacks. It opens its jaw to bite Sam\'s leg. Carefully anticipating the attack, Sam dangerously snaps her body backward and quickly backs off the dog by a few feet. During the brink of getting seriously wounded, Sam hears her phone dropped on the floor in front of the dog. The hungry animal quickly bites on it like it\'s a juicy chunk of meat until it shreds the device into pieces. \"Damn, should have been mroe careful,\" Sam utters some clear words of frustration.',
        choiceSet: 3,
        imgsrc: ''
    },
    goBack: {
        
        content: 'Go back.',
        choiceSet: 'corridor', //TODO change this to backToCorridorFromLeft, write text for this section
        imgsrc: ''
    },
// in the stairs
    goDownstairs: {
        
        content: 'Go to the basement.', //TODO expand this text
        choiceSet: 'basement',
        imgsrc: ''
    },
    goUpstairs: {
        
        content: 'Go to the attic.', //TODO expand this text
        choiceSet: 'attic',
        imgsrc: ''
    },
// in the attic
    runAway: {
        
        content: 'Petrified, she slips through the small window, and falling into a bush of geranium.',
        choiceSet: 'windowEnding', //TODO write window ending text
        imgsrc: ''
    },
    hideInCloset: {
        
        content: 'Petrified, Sam ran to the closet, opens it, and hides behind some old hanged dresses.',
        choiceSet: 'hidingInCloset', //TODO write the hiding in closet text and options
        imgsrc: ''
    },
    goBackDownstairs: {
        
        content: 'Petrified, Sam runs down the stairs to find a way to leave the house.',
        choiceSet: 'basement',
        imgsrc: ''
    },
// in the basement
    enterCar: {
        
        content: 'Enter a car and escape through the garage door.', //TODO expand this text
        choiceSet: 'carEnding', //TODO write car ending
        imgsrc: ''
    },
    leaveFromDoor: {
        
        content: 'Open the garage door and run to freedom.', //TODO expand this text
        choiceSet: 'basementEnding', //TODO write basement ending
        imgsrc: ''
    },
    enterControlRoom: {
        
        content: 'Sam enters the side room.', //TODO expand this text
        choiceSet: 'controlroom',
        imgsrc: ''
    },
    enterBlackCar: {
        
        content: 'Sam enters the black car.', //TODO expand on this
        choiceSet: 'trueEnding',
        imgsrc: ''
    },
// in the control room
    yesComputer: {
        
        content: 'Sam takes a sit at the desk and starts the computer.',
        choiceSet: 'computerSuccess', //TODO write the transition to the computer puzzle
        imgsrc: ''
    },
    noComputer: {
        
        content: 'There is nothing for Sam here. She turns around and leaves the room.',
        choiceSet: 'basement',
        imgsrc: ''
    },
//puzzle outcomes
    //TODO write objects for puzzle outcomes
    //outcomes for safe puzzle
    safeFail:{
        
        content: 'The combination Sam entered seems to not work. Maybe the next combination she enters will be the right one.',
        choiceSet: 9,
        imgsrc: ''
    },
    safeSuccess:{
        
        content: 'Sam successfully opens the safe, and was disappointed when she saw only a small paper slip is inside.',
        choiceSet: 'safeSuccess_note',
        imgsrc: 'smallnote.jpg'
    },
    safeSuccess_note:{
        content: 'There seems to be some sort of code written on it, so she decides to keep it, just in case. After making sure she didn\'t miss anything important, Sam turns and walks back to the corridor.',
        choiceSet: 1,
        imgsrc: ''
    },
    safeTryAgain:{
        content: 'Sam decides to try another combination.',
        choiceSet: 'safeOutcome',
        imgsrc: ''
    },
    safeAbort: {
        content: 'Sam gives up trying to open the safe. This might be for the best. Trespassing is already bad enough, stealing is definitely harder to get off the hook. Sam walks out of the safe room in the hopes of finding an exit soon.',
        choiceSet: 1,
        imgsrc: ''
    },
    //outcomes for computer puzzle
    computerFail: {
        
        content: 'The password Sam entered seems to be wrong.',
        choiceSet: 'yesComputer',
        imgsrc: ''
    },
    computerSuccess: {
        
        content: 'Placeholder for computer-login puzzle. With a click of the enter key, Sam successfully logs into the computer. Yet, the screen is only displaying one thing: Get into the black car', //TODO expand this text
        choiceSet: 'controlroom',
        imgsrc: ''
    },
    computerAbort: {
        
        content: 'After trying to get the correct password, Sam still can not log in to the desktop. Screw this! Sam expresses clear frustration for not being able to access a computer that is not hers in the first place.', //TODO expand this text
        choiceSet: 'controlroom',
        imgsrc: ''
    },
//ending text
    //TODO write objects for endings
    windowEnding: {
        
        content: 'Sam squishes herself through the attic window and leaped out without any hesitation. The brief moment when Sam is in the air is exhilarating. That instant, she feels like she might never land. She drops quickly from the second floor and lands on the awning, then subsequently rolls and drops again onto the front porch. She is outside. The End.', //TODO rewrite this ending
        choiceSet: 8,
        imgsrc: ''
    },
    basementEnding: {
        
        content: 'Sam runs out of the garage and escapes. The end.', //TODO expand on this
        choiceSet: 8,
        imgsrc: ''
    },
    carEnding: {
        
        content: 'Sam presses on the car key button, and all the cars suddenly flash and buzz. This key looks like a master key for all of the cars. Sam gets into one of the cars and drives through the garage door into the wild grassland. The end.', //TODO rewrite this
        choiceSet: 8,
        imgsrc: ''
    },
    trueEnding: {
        
        content: 'YOU have demonstrated superb puzzle solving skills and focus on the mission at hand, therefore have passed your reactivation test as a secret agent for the government of this country. Your memory of your former employment will be restored upon next time you wake up from your sleep.', //TODO wait
        choiceSet: 8,
        imgsrc: ''
    },
};

var choiceSet = {
    0:{
        callForHelp:{
            
            content: 'Use phone to call for help',
            item: -1,
            itemReq: 0
        },
        openDoor:{
            
            content: 'Open the door',
            item: -1,
            itemReq: -1
        },
        checkDrawer: {
            
            content: 'Check inside the drawer',
            item: 1,
            itemReq: -1
        }
    },
    1:{
        openRightDoor: {
            
            content: 'Enter the room on the right',
            item: -1,
            itemReq: -1
        },
        openLeftDoor: {
            
            content: 'Enter the room on the left',
            item: -1,
            itemReq: -1
        },
        continueDownHall: {
            
            content: 'Continue down the hall',
            item: -1,
            itemReq: -1
        }
    },
    2:{
        openSafe:{
            
            content: 'Try to open the safe',
            item: 2,
            itemReq: -1
        },
        returnToCorridor: {
            
            content: 'Return to the corridor',
            item: -1,
            itemReq: -1
        },
    },
    3:{
        giveBone: {
            
            content: 'Give the bone to the dog',
            item: 3,
            itemReq: 1
        },
        walkAround:{
            
            content: 'Walk around the dog',
            item: -1,
            itemReq: -1
        },
        goBack:{
            
            content: 'Return to the corridor',
            item: -1,
            itemReq: -1
        }
    },
    4:{
        goDownstairs:{
            
            content: 'Go downstairs',
            item: -1,
            itemReq: -1
        },
        goUpstairs: {
            
            content: 'Go upstairs',
            item: -1,
            itemReq: -1
        }
    },
    5:{
        runAway:{
            
            content: 'JUMP out the window',
            item: -1,
            itemReq: -1
        },
        hideInCloset:{
            
            content: 'Hide in the closet',
            item: -1,
            itemReq: -1
        },
        goBackDownstairs:{
            
            content: 'Run all the way downstairs',
            item: -1,
            itemReq: -1
        }
    },
    6:{
        enterCar:{
            
            content:'Drive away with one of the cars',
            item: -1,
            itemReq: 3
        },
        leaveFromDoor:{
            
            content:'Quickly run through the garage door',
            item: -1,
            itemReq: -1
        },
        enterControlRoom:{
            
            content: 'Check out the side room',
            item: -1,
            itemReq: -1
        },
        enterBlackCar: {
            content: 'Get in the only black car',
            item: -1,
            itemReq: 3
        }
    },
    7:{
        yesComputer:{
            content: 'Access the computer',
            item: -1,
            itemReq: 2
        },
        noComputer:{
            content: 'Return to the garage',
            item: -1,
            itemReq: -1
        }
    },
    8:{
        theEnd:{
            content: 'placeholder for ending page',
            item: -1,
            itemReq: -1
        }
    },
    9:{
        safeTryAgain: {
            content: 'Try another combination.',
            item: -1,
            itemReq: -1
        },
        safeAbort: {
            content: 'Give up trying.',
            item: -1,
            itemReq: -1
        }
    }
}

/*puzzle object*/
//TODO need to decide on the object fields for mini puzzles
var puzzle = {
    safePuzzle:{
        answer: [6,8,9,0],
        combination: [],
        content: 'safePuzzle',
        failCondition: 'safeFail',
        successCondition: 'safeSuccess',
        abortCondition: 'safeAbort'
    },
    computerPuzzle:{
        answer: 'yellow car',
        combination: '',
        content: 'computerPuzzle',
        failCondition: 'computerFail',
        successCondition: 'computerFail',
        abortCondition: 'computerAbort'
    }
}

/*Sound*/
var sound = {
    openDoor: "door.wav",
    openRightDoor: "doorRight.mp3",
    openLeftDoor: "doorLeft.mp3",
    goUpstairs: "stairsUp.wav",
    goDownstairs: "stairsDown.wav",
    stairs: "",
    leftroom: "dog.wav",
    yesComputer: "computer.wav",
    startingbedroom: "",
    attic: "",
    corridor: "",
    basement: "",
    rightroom: "",
    controlroom: "",
    callForHelp: "",
    checkDrawer: "",
    continueDownHall: "",
    openSafe: "",
    returnToCorridor: "",
    giveBone: "",
    walkAround: "",
    goBack: "",
    runAway: "",
    hideInCloset: "",
    goBackDownstairs: "",
    enterCar: "",
    leaveFromDoor: "",
    enterControlRoom: "",
    enterBlackCar: "",
    noComputer: "",
    safeFail: "",
    safeSuccess: "",
    safeAbort: "",
    computerFail: "",
    computerSuccess: "",
    computerAbort: "",
    windowEnding: "",
    basementEnding: "",
    carEnding: "",
    trueEnding: "",
}

/*Constructors*/

/*MainText
* creates text objects for the main story*/
function MainText(type, name, content, imgsrc, pronoun, choiceTrigger, end, sound){
    this.type = type; //string
    this.name = name; //string
    this.content = content; //string
    this.imgsrc = imgsrc; //string
    this.sound = sound; //string
    this.pronoun = pronoun; //array
    this.choiceTrigger = choiceTrigger; //int
    this.end = end; //int indicating the end index of this paragraph
    this.position = -1; //index number in the story array
    this.itemGain = function(itemNum){
        $('#itemImage' + itemNum).css('visibility', 'visible');
        itemArray[itemNum].isOwned = true;
    };
}

/*Choice
* creates a choice that has content array, item requirement for making the choice and text it results to*/
function Choice(type, choiceID, content, itemGain, itemReq, textLead){
    this.type = type;
    this.choiceID= choiceID; //int
    this.content = content; //array
    this.itemGain = itemGain; //array
    this.itemReq = itemReq; //array
    this.textLead = textLead; //array
    this.position = -1; //index number in the story array
    this.isPicked = initializeArrayFalse(this.content); //switch array for when player picks this choice
}

/*Puzzle
* creates a puzzle object to use put in story*/
function Puzzle(type, name, content, failCondition, successCondition, abortCondition){
    this.type = type; //string
    this.name = name; //string
    this.content = content; //string for function
    this.failCondition = failCondition; //string
    this.successCondition = successCondition; //string
    this.abortCondition = abortCondition; //string
    this.position = -1; //index number in the story array
    this.hideSwitch = function(){
        console.log('puzzle at story index: ' + this.position);
        if(displayRotation === this.position){
            $('#' + name).css('visibility', 'visible');
        }else{
            $('#' + name).css('visibility', 'hidden');
        }
    }
}

/*Item
* creates an item object that has an ID, name, and image link to local path*/
function Item(ID, name, image){
    this.ID = ID; //int
    this.name = name; //string
    this.image = image; //string
    this.isOwned = false; //boolean
    this.itemLost = function(itemNum){
        $('#itemImage' + itemNum).css('visibility', 'hidden');
        itemArray[itemNum].isOwned = false;
    };
}

/*Helper Functions*/

/*isPickedArray
* initiate an array to contain false boolean value */
function initializeArrayFalse(arr){
    var array = [];
    for(var i = 0; i < arr.length; i++){
        array[i] = false;
    }
    return array;
}