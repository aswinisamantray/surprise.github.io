var wish=document.getElementById('wish')
var submit=document.querySelector('#submit');
var val=document.getElementById('input');
var form=document.getElementById('name');
function getName(){
    var entered=val.value;
    wish.textContent='WISH YOU HAPPY BIRTHDAY'+" "+entered;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
  });