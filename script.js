var ele = document.querySelector(".biv");
var dd = "Hello my name is mohamed";
var vv = "And i'm a front end developper";
var i = 0;
var k = 0;
var a;

document.addEventListener("dblclick", function(){
    if(k==vv.length && i==dd.length)ele.innerHTML = "";
});
function zz(){
    setTimeout(azo, 1500);
}
function azo(){
        if(i<dd.length){
              ele.innerHTML += dd.charAt(i);
            i++;
            setTimeout(azo,100);
        }else{
            (k==0)?ele.innerHTML = "":a=1;
            if(k<vv.length ){
            ele.innerHTML += vv.charAt(k);
            k++;
            setTimeout(azo, 100);
        }
    }
};