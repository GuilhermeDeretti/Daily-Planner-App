var today =  moment();
var test = $('.timeblock')
var hour = $('#hour');
var currentDay = $('#currentDay').text(today.format("dddd, MMMM Do"));
var successMsg = $('#saveMessage');
savedTimer = 5;

// Render localstorage values
$('#input1').text(localStorage.getItem('9'));
$('#input2').text(localStorage.getItem('10'));
$('#input3').text(localStorage.getItem('11'));
$('#input4').text(localStorage.getItem('12'));
$('#input5').text(localStorage.getItem('13'));
$('#input6').text(localStorage.getItem('14'));
$('#input7').text(localStorage.getItem('15'));
$('#input8').text(localStorage.getItem('16'));
$('#input9').text(localStorage.getItem('17'));

$( ".saveBtn" ).on('click', function( event ) {
  successMsg.text("Appointment saved to localStorage")
  event.preventDefault();
  return;
});

// Button function 
$( ".saveBtn" ).on( "click", saveValue);
function saveValue(){
    var id = this.parentElement.parentElement.id; // get the sender's id to save it . 
    var val = this.parentElement.parentElement.children[1].children[0].value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
    savedTimer = 5;
    
    var hideSaved = setInterval(function () {
      savedTimer--;
          console.log(savedTimer);
          if (savedTimer <= 0) {
            clearInterval(hideSaved);
            successMsg.css('display', 'none') 
          }
    }, 1000);
    var showSaved = setInterval(function () {
      successMsg.css('display', 'flex') 
      clearInterval(showSaved);
    }, 1000);
  }

function init() {
  var rootEl = $('.container');
  // <p id="saveMessage"></p>
  var successMsg = $('<p>');
  successMsg.attr('id', 'saveMessage');
  rootEl.append(successMsg);

  arrayOfHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];  
  arrayOfHours.forEach(function(hour) {
    //create the base row structure
    // <div class="row" id="X"> where X is the hour
    var rowEl = $('<div class="row" id="' + hour + '">');
    rootEl.append(rowEl);
    //create the hour area
    var timeEl = $('<div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 timestamp">' + hour + amPm(hour) + '</div>')

    /*could be done diferently but just to practice the navigation truout the DOM in Jquerry 
    We add a class to change the row collor based on the hour */
    if(hour == today.hour()){
      rowEl.children().eq(1).addClass('present'); 
    } else if(hour < today.hour()){
      rowEl.children().eq(1).addClass('past');
    } else if(hour > today.hour()){
      rowEl.children().eq(1).addClass('future');
    }
    function amPm(hour){
      if(hour < 11){return "AM"
      } else return "PM";
    }
});
}

init();

/*
<div class="row " id="14">
  <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 timestamp">
    14PM
  </div>
  <div class="col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10 timeblock">
    <textarea name="" id="input6" cols="25" rows="1"></textarea>
  </div>
  <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
    <button class="saveBtn"><i class="fas fa-save fa-3x"></i></button>
  </div>
</div>

*/
// Create Timeslots
// create array with the hours
// loop the array of hours to create the rows
      
//   create TAG for row/hour/input/button 

//   give class to row/hour/input/button 

//   create a dataset to keep the hour in the (row)

//   style timeslots based on the hour comparing to "today.hour()"

//     append all tags

//   add event listener to add local storage when the save button is clicked in specific timeblock.(Data key "time")