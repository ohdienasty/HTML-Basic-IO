const container = document.querySelector('.container');
const stringDiv = document.querySelector('.stringIO');
const mathDiv = document.querySelector('.mathIO');
const stringMain = document.querySelector('.stringMainDiv');

function stringIO() {
    mathDiv.style.display = 'none';
    stringDiv.style.display = 'none';
    stringMain.style.display = 'flex';
}

function divOneFn(){
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const fullName = document.querySelector('.divOneResult');

    fullName.innerHTML = "Hello, " + firstName.value + " " + lastName.value + '!';
}

function divTwoFn(){
    const userInput = document.querySelector('#userName');
    const userName = document.querySelector('.divTwoResult');
    const limitString = document.querySelector('#limiterStr');
    
    if (userInput.value == ''){
    userName.innerHTML = "Please enter a character!";   
    } 

    else if (userInput.value.length < limitString.value ){
    userName.innerHTML = "Username is too short!";
    }
    else {
    userName.innerHTML = userInput.value;
    }

}

function divThreeFn() {
    const inputString = document.querySelector('#inputString');
    const stringResult = document.querySelector('.divThreeResult');
    const checkString = document.querySelector('#noSpChar');
    const checkNumber = document.querySelector('#noNum');
    let numCheck =  /\d/;
    let alphabetOnly = /^[A-Za-z ]+$/;
    let spCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (checkString.checked == true && checkNumber.checked == true) {
    // IF BOTH SPECIAL CHARACTER & NUMBER IS CHECKED ! THEN GOES TERNARY IF ELSE
        stringResult.innerHTML = (alphabetOnly.test(inputString.value)) ?
        "VALID INPUT !<br>> "+inputString.value : "<br> String contains Special Character/Number!";
    // CHECKS IF CONTAINS BOTH SPECIAL CHARACTER AND NUMBER AND ELSE FOR VALID  
    }

    else if (checkString.checked == true && checkNumber.checked != true) {
        if (inputString.value == ''){
            stringResult.innerHTML = "Detected no input.";
        }
        else {
            stringResult.innerHTML = (spCharCheck.test(inputString.value)) ?
            "String contains a Special Character!" : 
            "VALID INPUT !<br>> "+ inputString.value + "<br><br><br><br>(ignores a number)";    
        }
        
    }
    
    else if (checkString.checked != true && checkNumber.checked == true) {  
            
        if (inputString.value == ''){
            stringResult.innerHTML = "Detected no input.";
        }
        else {
            stringResult.innerHTML = (numCheck.test(inputString.value)) ?
            "String contains a number!" : 
            "VALID INPUT !<br>> "+ inputString.value + "<br><br><br><br>(ignores special character)";    
        }
        
    }

    else {
        stringResult.innerHTML = (inputString.value == '') ? 
        "Please enter a string!" : 
        "No checker activated.<br><br>> " +inputString.value;    
    }
}


function mathIO() {
    stringDiv.style.display = 'none';
    mathDiv.style.flex = '1';
 }