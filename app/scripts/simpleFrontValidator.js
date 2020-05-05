const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const postCode = document.getElementById('postCode')
const cardNum = document.getElementById('cardNum')
const seCode = document.getElementById('seCode')
const expdate = document.getElementById('expdate')

const errorElement = document.getElementById('error')

const form = document.getElementById('form')
const button = document.getElementById('button')
const inputs = [fname, lname, email, postCode, cardNum, seCode, expdate]

for (let i = 0; i < inputs.length; i++) {
 inputs[i].addEventListener('click' , (e)=> {
inputs[i].value = ''

if (i == 5) {
  seCode.type = 'password';
}
 })
}

button.addEventListener('click', (e)=>{
  var messages = [];
  e.preventDefault();

  (fname.value === '' || fname.value === null)? messages.push('Name is required'):console.log();
  (fname.value.length <3)? messages.push('Too short name'):console.log();
  (lname.value === '' || lname.value === null)? messages.push('Last name is required'):console.log();
  (email.value === '' || email.value === null)? messages.push('Email is required'):console.log();
  (postCode.value === '' || postCode.value === null)? messages.push('Post code is required'):console.log();
  (seCode.value === '' || seCode.value === null)? messages.push('Security code is required'):console.log();
  (cardNum.value === '' || cardNum.value === null)? messages.push('Card Number name is required'):console.log();
  (expdate.value === '' || expdate.value === null)? messages.push('Expiration date is required'):console.log();

if (validateEmail(email.value)) {
  console.log('nie, nie sieje rzezuchy')
}else {
  messages.push('Invaild email adress')
}
if (validateexp(expdate.value)) {
  // console.log('')
}else {
  messages.push('Invaild expiration format MM/YY')
}

if (messages.length > 0 ) {
  e.preventDefault();
  errorElement.innerText = messages.join(', ');
}

})

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateexp(expdate) {
    let re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return re.test(String(expdate).toLowerCase());
}
