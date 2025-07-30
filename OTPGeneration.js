let generateOTPButton=document.getElementById("generate_otp_button");
let validateOTPButton=document.getElementById("validate_otp_button");
let otpContainer=document.getElementById("otp_container");
let closeButton=document.getElementById("close_button");
let otp=document.getElementById("otp");
let otpInputBox=document.getElementById("otp_inputbox");
let validationStatementContainer=document.getElementById("validation_statement_container");
let generatedOTP;

generateOTPButton.addEventListener("click",()=>otpContainer.style.display="block");
closeButton.addEventListener("click",()=>otpContainer.style.display="none");
closeButton.addEventListener("mouseover",()=>{
    closeButton.style.color="white";
    closeButton.style.background="red";
});
closeButton.addEventListener("mouseout",()=>{
    closeButton.style.color="red";
    closeButton.style.background="white";
});

function toGenerateOTP(){
    let firstRandomDigit=Math.floor(Math.random()*10);   
    let secondRandomDigit=Math.floor(Math.random()*10);   
    let thirdRandomDigit=Math.floor(Math.random()*10);   
    let fourthRandomDigit=Math.floor(Math.random()*10);   
    let fifthRandomDigit=Math.floor(Math.random()*10);   
    let sixthRandomDigit=Math.floor(Math.random()*10);
    generatedOTP=`${firstRandomDigit}${secondRandomDigit}${thirdRandomDigit}${fourthRandomDigit}${fifthRandomDigit}${sixthRandomDigit}`;
    otp.innerText=generatedOTP; 
    validationStatementContainer.innerText="";  
}
generateOTPButton.addEventListener("click",toGenerateOTP());

function toValidateOTP(){
    let enteredOTP=otpInputBox.value;
    if(enteredOTP==""){
        validationStatementContainer.innerText="Please Enter OTP, First Generate OTP";
        validationStatementContainer.style.color="orange";
    }
    else if(enteredOTP==generatedOTP){
        validationStatementContainer.innerText="OTP Validation Successful";
        validationStatementContainer.style.color="lawngreen";
    }
    else{
        validationStatementContainer.innerText="OTP mismatch, Please Generate OTP";
        validationStatementContainer.style.color="orange";
    }
    otpInputBox.value="";
}
validateOTPButton.addEventListener("click",toValidateOTP);