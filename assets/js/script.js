var today =  moment();
var test = $('.timeblock')
var hour = $('#hour');
var currentDay = $('#currentDay').text(today.format("dddd, MMMM Do"));

// Get the value of the input textarea
var input = $('#input')

$( ".saveBtn" ).on( "click", saveValue);
function saveValue(){
    var id = this.parentElement.parentElement.getAttribute("data-hour"); // get the sender's id to save it . 
    var val = this.parentElement.parentElement.children[1].children[0].value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

arrayOfHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

/*
//initialize
  //load data from localStorage
  // Data key "time"

  ///Create Timeslots
  //create array with the hours
  //loop the array of hours to create the rows
        
    //create TAG for row/hour/input/button 

    //give class to row/hour/input/button 

    //create a dataset to keep the hour in the (row)

    //style timeslots based on the hour comparing to "today.hour()"
    if(arrayofHours[i] == today.hour()){
        //timeblockelement.addClass('past');
      } else if(arrayofHours[i] == today.hour()){
        //timeblockelement.addClass('present');
      } else if(arrayofHours[i] == today.hour()){
        //timeblockelement.addClass('future');
      }
  
      //append all tags
  
    // add event listener to add local storage when the save button is clicked in specific timeblock.(Data key "time")
    */