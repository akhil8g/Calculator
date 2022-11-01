const display=document.querySelector(".display");
var exp =Number(display.textContent);
const keys=document.querySelectorAll(".keys");
var x;
for (let i=0;i<keys.length-2;i++){
    keys[i].addEventListener("click", function(){input(keys[i].textContent);})

}
keys[keys.length-2].addEventListener("click",function(){evaluvate();})
keys[keys.length-1].addEventListener("click",function(){str="";display.textContent=0;})
var str="";
function input(x){
    str=str+x;
    display.textContent=str;
}

function evaluvate() {
    var result=eval(str);
    display.textContent=result;
}
