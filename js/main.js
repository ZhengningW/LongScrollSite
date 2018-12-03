//console.log("yeah");
//window.scrollBy(100, 100);
//alert(window.pageXOffset + window.pageYOffset);

var counter = document.getElementById('counter');

window.onscroll = function(){

                  var distance = window.pageYOffset;
                  console.log(distance);
                  document.getElementById('counter').innerHTML = Math.floor(distance / 450)+"<span>k</span>";




                  counter.style.top = 60 + distance +"px";
                  counter.style.transform="rotate("+ distance +"deg)";



                  if(distance > 2000){
                    counter.style.backgroundColor ="blue";
                    } else {
                    document.getElementById('counter').style.backgroundColor ="#F2E2CF";
                    }
                  }
//*password*//
var message;
var form = document.getElementById("message");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");


submit.addEventListener("click", function(){

  message = pw.value;

  if (message == "12345"){
  form.innerHTML = "The passwortd is right, you can have the treasure, take it with you now. "; 
  }else{
  form.innerHTML = "You'd better leave before I decide to kill you.";
  }



});
//*end password*//
