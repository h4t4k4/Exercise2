var bil_1,bil_2;
var oprt;
var decimalbil1,decimalbil2;
decimalbil1=false;
decimalbil2=false;
bil_1="";
bil_2="";
oprt="";
function setbil(abc){
    if(oprt==""){
        if(abc=="." && decimalbil1==false){
            if(bil_1==""){
                bil_1="0.";
                decimalbil1=true;
            }else{
                bil_1=bil_1+abc;
            }
        }else{
            bil_1=bil_1+abc;
        }

        document.getElementById('displaynya').innerHTML=bil_1;
    }else{
        if(abc=="." && decimalbil2==false){
            if(bil_2==""){
                bil_2="0.";
                decimalbil2=true;
            }else{
                bil_2=bil_2+abc;
            }
        }else{
            bil_2=bil_2+abc;
        }

        document.getElementById('displaynya').innerHTML=bil_2;
    }
}

function setoperator(def){
    if(bil_1!=""){
        oprt=def;
        document.getElementById('displaynya').innerHTML=oprt;
    }else{
        if(document.getElementById('displaynya').innerText!=""){
            bil_1=document.getElementById('displaynya').innerText;
            oprt=def;
        }
    }
    
}
function clearkan(){
    bil_1="";
    bil_2="";
    oprt="";
    document.getElementById('displaynya').innerHTML="";
}
function sumkan(){

var bil1=parseFloat(bil_1);
var bil2=parseFloat(bil_2);
var hsl=0;
if(oprt!="" && bil_1!="" && bil_2!=""){
    if(oprt=="+"){
        hsl=bil1+bil2;
    }
    if(oprt=="-"){
        hsl=bil1-bil2;
    }
    if(oprt=="*"){
        hsl=bil1*bil2;
    }
    if(oprt=="/"){
        hsl=bil1/bil2;
    }
    document.getElementById('displaynya').innerHTML=hsl;
    bil_1="";
    bil_2="";
}

}