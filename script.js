
function add ()
{   var n1  =document.getElementById("n1").value;
    var n2  =document.getElementById("n2").value;
    alert(" Hurry  😀 ➕ Addition")
    document.getElementById("res").value =parseInt(n1)  +parseInt(n2);
  
}
function sub ()
{   var n1  =document.getElementById("n1").value;
    var n2  =document.getElementById("n2").value;
    alert(" Hurry  😀   ➖ subtraction ")
    document.getElementById("res").value =parseInt(n1) -parseInt(n2);
  
}
function mul ()
{   var n1  =document.getElementById("n1").value;
    var n2  =document.getElementById("n2").value;
    alert(" Hurry  😀 ✖️ multiplication ")
    document.getElementById("res").value =parseInt(n1) *parseInt(n2);
  
}
function div ()
{   var n1  =document.getElementById("n1").value;
    var n2  =document.getElementById("n2").value;
    alert(" Hurry  😀 ➗ Division")
    document.getElementById("res").value =parseInt(n1) /parseInt(n2);
  
}

function reset ()
{        alert("  Oops 😀  Reset me  ")
     document.getElementById("n1").value= "";
    document.getElementById("n2").value ="";

    document.getElementById("res").value ="";
  
}
//  Another function
function sum ()
{   alert(" Hurry  😀 sum")
    var n1  =document.n1.value;
    var n2  =document.n2.value;
   document.getElementById("res").value =parseInt(n1)  +parseInt(n2);
  
}