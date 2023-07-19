let btn = document.querySelector('#btn');
let num = document.querySelector('#num');
let reset = document.querySelector('#reset');
let start = 0;

btn.onclick = function(){
    start++;
    num.innerHTML = start;
    if (start == 100){
        alert("bruh")
    }
}

reset.onclick = function(){
    start = 0;
    num.innerHTML = '0';
}

