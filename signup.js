let verify_btn=document.querySelector('.verfiy_btn')
// console.log(verify_btn);
let user_name=document.getElementById('name_text')
let mobile_no=document.getElementById('number_text')
let password=document.getElementById("password_text")
verify_btn.addEventListener('click',(e)=>{
    console.log("hello");
    if(user_name.value==''||user_name.value.length<=3||mobile_no.value=="" ||mobile_no.value<=10||password.value==''||password.value.length<6){
   if(user_name.value==''||user_name.value.length<=3){
const msg=document.querySelector('.error_msg');
msg.setAttribute('class','msg_error_js')
user_name.style.border="1px solid red"
   }
    else if(mobile_no.value=="" ||mobile_no.value<=10){
const msg=document.querySelector('.error_msg_no')
msg.setAttribute('class','msg_error_js')
mobile_no.style.border="1px solid red"
    }
    else if(password.value==''||password.value.length<6){
       const msg= document.querySelector('.password_instrution')
   msg.style.color="red"
   password.style.border="1px solid red"
    }
}
else{
console.log('all write')

}
})