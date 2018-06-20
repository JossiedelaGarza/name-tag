var nameTagInput = document.getElementById("name");
var nameTagDisplay = document.getElementById("nameDisplay");

nameTagInput.addEventListener("keypress", function(event){
  var currentName = nameTagInput.value;
  nameTagDisplay.innerText = currentName;
  
});