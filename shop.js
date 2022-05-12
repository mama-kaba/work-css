var plusbtns= document.querySelectorAll( ".plus-btn");
var minusbtns = document.querySelectorAll(".minusbtns ")
for (let i = 0; i < plusbtns.length; i++) { 
    plusbtns[i].addEventListener(" click", function() {
        plusbtns[i].nextElementSibling.innerHTML++ ;
    });

minusbtns[i].addEventListener("click", function() {
  if   (minusbtns[i].previousElementSibling.innerHTML>0)
  minusbtns[i].previousElementSibling.innerHTML--;});

}