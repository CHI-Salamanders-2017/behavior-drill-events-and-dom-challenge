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

    $(".river-content").append(newEvent);
  }

  $("#click-event").on("click", function(event){
    event.preventDefault();
    addEventToList(event);
  });

  $("#mouseover").mouseover(function(event){
    event.preventDefault();
    addEventToList(event);
  });

});
