var btn = document.querySelectorAll("button");
let input = document.querySelector("input");
let cancelBtn = document.querySelector(".cancelBtn");
for(i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        input.value += this.innerHTML;
    }
}

cancelBtn.addEventListener('click', function(){
    input.value = null;
})


function calculeNumb(num){
    let result = eval(num);
     input.value = result;
}

let equalBtn = document.querySelector('.equalBtn');

equalBtn.addEventListener('click', function(){
    calculeNumb(input.value);
})


