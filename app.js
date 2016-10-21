$(document).ready(function(){
  console.log("document loaded")

  var disclaimerShown = false

  $("#disclaimer").mouseover(function(){
    // $("#highlightdisclaimer").addClass("highlight")

    if (disclaimerShown == false){
      var text = $("#highlightdisclaimer").text()
      $("#highlightdisclaimer").css("background-color", "yellow").fadeOut(4000)
      .text(text).fadeIn(2000)
      disclaimerShown = true
    }
  });
})

$(document).ready(function(){
  $(".button-collapse").sideNav();
})
