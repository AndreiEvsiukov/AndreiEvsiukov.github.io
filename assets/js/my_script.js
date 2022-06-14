// 1. FOR SLIDESHOW

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



// 2. FOR MODALS



// modal 1

// Get the modal
var modal_scheme = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img_scheme = document.getElementById("_img_diagram");
var modalImg_scheme = document.getElementById("img01");
var captionText_scheme = document.getElementById("caption1");
img_scheme.onclick = function(){
  modal_scheme.style.display = "block";
  modalImg_scheme.src = this.src;
  captionText_scheme.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span_scheme = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span_scheme.onclick = function() { 
  modal_scheme.style.display = "none";
}



// modal 2

// Get the modal
var modal_ielts = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img_ielts = document.getElementById("_img_ielts");
var modalImg_ielts = document.getElementById("img02");
var captionText_ielts = document.getElementById("caption2");
img_ielts.onclick = function(){
  modal_ielts.style.display = "block";
  modalImg_ielts.src = this.src;
  captionText_ielts.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span_ielts = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span_ielts.onclick = function() { 
  modal_ielts.style.display = "none";
}