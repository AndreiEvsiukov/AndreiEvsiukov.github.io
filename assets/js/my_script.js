// Get all the buttons into a node list
let buttons = document.querySelectorAll("._carousel_control");

// Set an event handler on the document so that when
// any element is clicked, the event will bubble up to it
document.addEventListener("click", function(evt){
  // Check to see if it was a button that was clicked
  if(evt.target.classList.contains("_carousel_control")){
    // Loop over all the buttons & remove the active class
    buttons.forEach(function(button){
      button.classList.remove("active");
    });
    // Make the clicked button have the active class
    evt.target.classList.add("active");
  }
});