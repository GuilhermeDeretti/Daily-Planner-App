var today =  moment();
var currentDay = $('#currentDay').text(today.format("dddd, MMMM Do"));
var successMsg = $('#saveMessage');
savedTimer = 5;

init();

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
    var timeEl = $('<div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 timestamp">' + hour + amPm(hour) + '</div>');
    rowEl.append(timeEl)
    //create textarea
    var textAreaEl = $('<div class="col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10 timeblock"><textarea></textarea></div>');
    rowEl.append(textAreaEl);
    /*could be done diferently but just to practice the navigation truout the DOM in Jquerry 
    We add a class to change the row collor based on the hour */
    if(hour == today.hour()){
      textAreaEl.addClass('present'); 
    } else if(hour < today.hour()){
      textAreaEl.addClass('past');
    } else if(hour > today.hour()){
      textAreaEl.addClass('future');
    }

    // Render localstorage values
    textAreaEl.children().eq(0).text(localStorage.getItem(hour));
    
    //create button area
    var buttonAreaEl = $('<div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1"><button class="saveBtn"><i class="fas fa-save fa-3x"></i></button></div>');
    rowEl.append(buttonAreaEl);    

    function amPm(hour){
      if(hour < 12){return "AM";
      } else return "PM";
    }
});
}

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
</div>*/