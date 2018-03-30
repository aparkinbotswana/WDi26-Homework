//console.log('test');

charDropdown = function(){
  // console.log("here");
  // debugger;
  document.getElementById("char-dropdown").classList.toggle("show");
}

houseDropdown = function(){
  // console.log("here");
  // debugger;
  document.getElementById("house-dropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
