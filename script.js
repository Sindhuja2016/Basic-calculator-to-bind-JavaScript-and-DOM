let numbers = document.querySelectorAll('.key');
let display = document.getElementById('display');
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        let value = this.innerText;
        if(value === '='){
            let expression = display.value
            .replace(/×/g, '*')
             .replace(/÷/g, '/');


           display.value= eval(expression);
        }
        else if (value === "C" || value === 'CE') {
            display.value = "";
        } 
        else if (value === '1/x') {
            display.value = 1 / display.value;

        } else if (value === 'x²') {
            display.value = display.value * display.value;

        } else if (value === '√') {
            display.value = Math.sqrt(display.value);

        } else if (value === '%') {
            display.value = display.value / 100;
        }
        else if (value === '⌫') {
            display.value = display.value.slice(0,-1);
        }
       else {
            display.value += value;
        }
    })
    
}