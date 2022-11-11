
import navbar from "../components/navbar.js";

import { srj_footer } from "../components/footer.js";
let srjfooter=document.getElementById("footer")





let nav = document.getElementById('navbar').innerHTML = navbar();

//popup js

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('moverlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



let signupBtn = document.querySelector("#submit");

signupBtn.addEventListener("click", () => {
  signup();
});

const api = `https://modesens-data3.onrender.com/api/user`;

const signup =async () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  let data={
    email,
    password,
    cart: []
}
let exist=await fetch(api)
exist=await exist.json();

if (exist.find(e => e.email===email)) {
    /* same result as above, but a different function return type */
    alert(`${email} already exist.Please Login`);
    // window.location.href="./login.html"
    return;
  }else{
    await fetch(api,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-Type":"application/json",
        }
    });
    let form = document.getElementById("login_form");
      form.reset();
    alert(`Welcome ${name} to Modesens`)
    window.location.href="/divine-society-1574/index.html"

    
  }


}

let loginBtn = document.getElementById("login");
let SingnInBtn = document.getElementById("submit");
loginBtn.style.display = "none";
let already = document.querySelector("#already");
already.onclick = () => {
  Toggle();
}

let toggler = false;
function Toggle() {
  let title = document.querySelector(".mtitle");
  let form_title = document.querySelector(".right_title");
  let p = document.querySelector(".checkbox");
  let addClass = document.querySelector("#submit");
  let already = document.querySelector("#already");
  
  if (toggler == false) {
    title.innerText = "LOGIN HERE";
    form_title.innerText = "Sign In here to Continue";
    p.innerHTML = "Forgot Password"
    p.style.marginBottom = "15px";
    already.innerText = "Create an Account";
    addClass.innerText = "Sign In";
    addClass.style.width = "70%"
    addClass.style.height = "30px";
    // addClass.classList.add("login");
    // addClass.classList.remove("signup");
    loginBtn.style.display = "block";
    SingnInBtn.style.display = "none";
    toggler = true;
  }
  else {
    title.innerText = "SIGN UP HERE";
    form_title.innerText = "Create an Acoount";
    p.innerText = "Subscribe to personalized sale updates and offers";
    already.innerText = "Alredy have an account?Please SignIn";
    addClass.innerText = "Sign Up";
    addClass.style.width = "70%"
    addClass.style.height = "30px";
    
    loginBtn.style.display = "none";
    SingnInBtn.style.display = "block";

    toggler = false;
  }
  
  
}


let signinBtn = document.querySelector("#login");

signinBtn.addEventListener("click", () => {
  signin();
});



let signin = async() => {
  let mail = document.getElementById('email').value;
  let pass = document.getElementById('password').value;

  let data;
    try {
        data=await fetch(api)
        data=await data.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    if(data.find(e=>e.email==mail && e.password==pass)){
        
      let form = document.getElementById("login_form");
      form.reset();
      alert('Login Successfull')
      window.location.href="/divine-society-1574/index.html"
    }else{
        alert("Wrong Credentials")
    }
  
}










//footer
srjfooter.innerHTML = srj_footer()