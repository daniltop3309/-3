
function js_style() {
    let elem = document.getElementById("text");
    elem.style.fontSize = "20px";
    elem.style.color = "green";
    elem.style.background = "blue";
    elem.style.border = "5px solid black";
    elem.style.width =  "101px";
}



function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}



function getAttributes()
{
    var u = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : '+u);
    var v = document.getElementById("w3r").hreflang;   
    alert('The value of the hreflang attribute of the link is : '+v);
    var w = document.getElementById("w3r").rel; 
    alert('The value of the rel attribute of the link is : '+w);
    var x = document.getElementById("w3r").target; 
    alert('The value of the taget attribute of the link is : '+x);
    var y = document.getElementById("w3r").type; 
    alert('The value of the type attribute of the link is : '+y);  
}



function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}



function changeContent()
{
rn = window.prompt("Выберите строку(0,1,2)", "0");
cn = window.prompt("Выбирите столбец(0,1)","0");
content = window.prompt("На что заменить?");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}



function createTable()
{
rn = window.prompt("Количество строк?", 1);
cn = window.prompt("Количество столбцов?",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}



function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}