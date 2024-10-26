const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const chars = ["%","*","/","-","+","="];
let output = "";

const calculate = (btnvalue) => {
    if(btnvalue ==="=" && btnvalue !==""){
        output = eval(output.replace("%","/100"));    //if button has '%;, then replace it with '/100'
    }
    else if(btnvalue === "AC"){
        output = "";                                   //if AC is clicked, remove all value
    }else if(btnvalue ==="DEL"){
        output = output.toString().slice(0,-1);            //if DEL clicked, remove last character
    }
    else{
       if(output === "" && chars.includes(btnvalue)) return;
       output += btnvalue;
      
    }
    display.value=output;
}

buttons.forEach(buttons => {
    buttons.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});

