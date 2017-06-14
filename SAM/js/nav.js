/*
 * Javascript for page navigation
 * */

/*Variables*/
var displayRotation = 0;

/*Functions*/
//event listener for keyboard presses
$(document).ready(function() {
    document.addEventListener("keyup", function (event) { // add event listener function that calls back to check what key is pressed
        console.log(event);
        if (event.which === 32 || event.which === 39 || event.which === 40) {// if the key pressed is space, down arrow or right arrow
            var knownStoryLength = gameStory.getLength() - 1; //set knowStoryLength to the current length of the story object
            console.log('Current total story progress length: ' + knownStoryLength);
            if (displayRotation < knownStoryLength) displayRotation++; //if rotation is not at the end of known story progress
        } else if (event.which === 37 || event.which === 38) { // if the key pressed is up arrow or left arrow
            if (displayRotation > 0) displayRotation--; //if rotation is not at the start then decrease rotation counter
        }
        console.log('On ' + displayRotation + ' out of ' + gameStory.getLength());
        checkPuzzleHide(); //checks if the story is on the puzzle page. If so, show the puzzle.
        printContent(displayRotation); //print the story content according to the display rotation
    });

    // event listener when item modal is triggered
    // reference: https://v4-alpha.getbootstrap.com/components/modal/#how-it-works
    $('#itemModal').on('show.bs.modal', function (event) { //on modal show
        console.log('modal event fired');
        var item = $(event.relatedTarget); // Button that triggered the modal
        var itemName = item.data('name'); // Extract info from data-* attributes
        var itemSrc = item.data('image');
        var modal = $(this);
        modal.find('.modal-title').text(itemName); //change the modal title to the name of the item
        modal.find('.modal-body img').attr('src', itemSrc); //change the source of the image in modal body to display image of the item
    })
})