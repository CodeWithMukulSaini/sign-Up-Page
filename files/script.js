let fullName = document.querySelector('.fullName');
let nameInput = document.querySelector('.nameInput');
let signup = document.querySelector('.signup');
let signin = document.querySelector('.signin');
let formBtn = document.querySelector('.formBtn');
let suggestion = document.querySelector('.suggestion');
let underline = document.querySelector('.underline');
let form = document.querySelector('.form');
let heading = document.querySelector('.heading');

signin.addEventListener('click',()=>{
    fullName.style.display = 'none';
    nameInput.style.display = 'none';
    underline.style.marginLeft = '58%';
    signup.style.color = '#dadada';
    signin.style.color = '#68A2FE';
    suggestion.innerHTML = 'i dont have an account <a href="#" class="text-blue-500 lg:text-sm"> Sign Up</a>';
    form.style.marginTop = '1vw';
    formBtn.innerHTML = 'sign In';
})
signup.addEventListener('click',()=>{
    fullName.style.display = 'block';
    nameInput.style.display = 'block';
    underline.style.marginLeft = '20%';
    signup.style.color = '#68A2FE';
    signin.style.color = '#dadada';
    suggestion.innerHTML = 'I have an Account<a href="#" class="text-blue-500 lg:text-sm signin"> Sign In</a>';
    form.style.marginTop = '0';
    formBtn.innerHTML = 'sign Up';
})
