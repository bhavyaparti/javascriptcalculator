window.addEventListener('load',bindEvent);
function bindEvent(){
    document.querySelector("#b2").addEventListener('click',printValButton2);
    document.querySelector("#b3").addEventListener('click',printValButton3);
    document.querySelector("#b4").addEventListener('click',printValButton4);
    document.querySelector("#b5").addEventListener('click',printValButton5);
    document.querySelector("#b6").addEventListener('click',printValButton6);
    document.querySelector("#b7").addEventListener('click',printValButton7);
    document.querySelector("#b8").addEventListener('click',printValButton8);
    document.querySelector("#b9").addEventListener('click',printValButton9);
    document.querySelector("#b0").addEventListener('click',printValButton0);
    document.querySelector("#plus").addEventListener('click',printValOperationPlus);
    document.querySelector("#opequal").addEventListener('click',printValOperationEqual);
    document.querySelector("#sub").addEventListener('click',printValOperationSub);
    document.querySelector("#mul").addEventListener('click',printValOperationMul);
    document.querySelector("#bdec").addEventListener('click',printValOperationDec);
    document.querySelector("#div").addEventListener('click',printValOperationDiv);
    document.querySelector("#clear").addEventListener('click',Clear);
    document.querySelector("#Back").addEventListener('click',Back);
    document.querySelector("#rightbracket").addEventListener('click',printRightBracket);
    document.querySelector("#leftbracket").addEventListener('click',printLeftBracket);


}
function printValButton1(){
    var buttonVal=document.querySelector("#b1").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton2(){
    var buttonVal=document.querySelector("#b2").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton3(){
    var buttonVal=document.querySelector("#b3").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton4(){
    var buttonVal=document.querySelector("#b4").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton5(){
    var buttonVal=document.querySelector("#b5").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton6(){
    var buttonVal=document.querySelector("#b6").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton7(){
    var buttonVal=document.querySelector("#b7").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton8(){
    var buttonVal=document.querySelector("#b8").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton9(){
    var buttonVal=document.querySelector("#b9").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValButton0(){
    var buttonVal=document.querySelector("#b0").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationPlus(){
    var buttonVal=document.querySelector("#plus").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationSub(){
    var buttonVal=document.querySelector("#sub").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationMul(){
    var buttonVal=document.querySelector("#mul").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationDiv(){
    var buttonVal=document.querySelector("#div").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationDec(){
    var buttonVal=document.querySelector("#bdec").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printValOperationEqual(){
    var result=document.querySelector("#calText").value;
    calcResult=eval(result);
    document.querySelector("#calText").value=calcResult;
}
function Clear(){
    document.querySelector("#calText").value=" ";
}
function Back(){

    var ipsize=document.querySelector("#calText").value.length;
    document.querySelector("#calText").value=document.querySelector("#calText").value.substring(0,ipsize-1);
}
function printLeftBracket(){
    var buttonVal=document.querySelector("#leftbracket").innerText;
    document.querySelector("#calText").value+=buttonVal;
}
function printRightBracket(){
    var buttonVal=document.querySelector("#rightbracket").innerText;
    document.querySelector("#calText").value+=buttonVal;
}