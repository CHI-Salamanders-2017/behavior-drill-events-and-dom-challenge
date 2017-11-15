$(document).ready(function(){

  $(document).tooltip({
      position: {
        my: "center bottom",
        at: "center top-105",
        using: function( position, feedback ) {
          $(this).css(position);
          $(this).css("width", "250px");
          $("<div>")
            .addClass("arrow")
            .addClass(feedback.vertical)
            .addClass(feedback.horizontal)
            .appendTo(this);
        }
      }
    });

  function addEventToList(event) {
    event.preventDefault();

    var eventTemplate = $("#event-template").html();
    var newEvent = $(eventTemplate).clone();

    var eventType = event.type;
    var eventDate = new Date(event.timeStamp);
    var hours = eventDate.getHours();
    var minutes = eventDate.getMinutes();
    var seconds = eventDate.getSeconds();

    if(minutes < 10) {
      minutes = "0" + minutes;
    }

    if(seconds < 10) {
      seconds = "0" + seconds;
    }

    $(newEvent).find(".event-name").html(eventType);
    $(newEvent).find(".event-time").html(hours + ":" + minutes + ":" + seconds);

    $(".river-content").prepend(newEvent);
  }

  var clickCount = 0;
  var mouseoverCount = 0;
  var mouseoutCount = 0;
  var submitCount = 0;
  var keyupCount = 0;
  var changeCount = 0;
  var focusCount = 0;
  var blurCount = 0;
  var selectCount = 0;

  $("#click-event").on("click", function(event){
    event.preventDefault();
    addEventToList(event);
    clickCount++;
    $("#clickCount").text(clickCount);
  });

  $("#mouseover").mouseover(function(event){
    event.preventDefault();
    addEventToList(event);
    mouseoverCount++;
    $("#mouseoverCount").text(mouseoverCount);

    if (mouseoverCount < 2) {
      $changeColor = $("#river > :nth-child(2)").children().first();
      $changeColor.css("background-color", "#e242f4");
    }
  });

  $(".submit").submit(function(event){
    event.preventDefault();

    if ($(".submit form input").first().val() === "") {
      alert("Input field is blank!");
    } else {
      addEventToList(event);
      submitCount++;
      $("#submitCount").text(submitCount);
    }
  });

  $(".keyup").keyup(function(event){
    event.preventDefault();
    addEventToList(event);
    keyupCount++;
    $("#keyupCount").text(keyupCount);
  });

});
