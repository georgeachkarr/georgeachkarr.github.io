const ageLabel = document.getElementById("ageLabel");
const ageText = document.getElementById("age");
const slider = document.getElementById("customRange3");

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const comment = document.getElementById("comment");
const calculate = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");

slider.value = 0;
let age = 0;

slider.addEventListener("input",event=>{
    age = slider.value;
    ageText.innerText = age;
});

calculate.onclick = isInputEmpty;

function isInputEmpty(){
    if(age == "0" || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        console.log("empty")
        window.alert("All Fields must be Filled");
    }else{
        console.log("notempty")
        calculateBMI();
    }
}

function calculateBMI(){
    let result = Number(weight.value) / Math.pow((Number(height.value) / 100), 2);
    console.log(result)
    resultDisplay.innerText = result.toFixed(2).toString();

    if(result < 18.1){
        comment.innerText = "Underweight";
        comment.style.color = "#06D3B4";
    }else if(18.5<=result&&result<=24.9){
        comment.innerText = "Healthy";
        comment.style.color = "#27B805";
    }else if(25<=result&&result<=29.9){
        comment.innerText = "Overweight";
        comment.style.color = "#FCAF01";
    }else if(30<=result&&result<=34.9){
        comment.innerText = "Obese";
        comment.style.color = "#F86807";
    }else{
        comment.innerText = "Extremely obese";
        comment.style.color = "#FF1901";
    }

}