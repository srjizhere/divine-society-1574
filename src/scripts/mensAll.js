/*GET /posts?_page=7
GET /posts?_page=7&_limit=20 */

import navbar from "../components/navbar.js";

import { srj_footer } from "../components/footer.js";

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

document.getElementById("footer").innerHTML = srj_footer()



let api = "https://modesens-data3.onrender.com/api/product"
let getData = async (page, limit) => {

    let res = await fetch(`${api}?category=mens&_page=${page}`)
    res = await res.json()

    renderDom(res)
    show(page)
    console.log(res.length);
}
getData(1)
let cont = document.getElementById("Product_section")
let renderDom = (data) => {
    cont.innerHTML = null
    let p = document.createElement("p")
    p.innerText = "Quick View"
    data.forEach((el, i) => {

        let parcent = Math.round((el.price * 100) / el.discount)
        // console.log(parcent)
        let div = document.createElement("div")
        div.setAttribute("class", "hps")
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class", "imgDiv")
        let img = document.createElement("img")
        img.setAttribute("class", "product_img")
        let boxDiv = document.createElement("div")
        boxDiv.setAttribute("class", "boxDiv")
        img.src = el.image_url || el.image

        let id = el.id

        imgDiv.append(img, boxDiv)

        div.addEventListener("mouseover", function () {

            //  window.location.href = "index.html"

            boxDiv.style.display = "block";
            boxDiv.append(p)

            //   div.style
            boxDiv.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        })


        div.addEventListener("mouseout", function () {

            //  window.location.href = "index.html"

            boxDiv.style.display = "none";
            //   div.style

        })


        let title = document.createElement("p")
        title.innerText = el.brand
        let des = document.createElement("p")
        des.innerText = el.title
        let price = document.createElement("p")
        price.innerText = `$ ${el.price}(${parcent}%) - $ ${el.discount} `
        let store = document.createElement("p")

        store.innerText = `Compare over ${Math.round(Math.random() * 20)} stores`

        div.append(imgDiv, title, des, price, store)

        div.onclick = () => {
            localStorage.setItem("id", JSON.stringify(id))
            window.location.href = "product.html"
        }
        cont.append(div)
    });


}


document.getElementById("category").addEventListener("change", function () {

    category()
})

let category = async () => {
    let value = document.getElementById("category").value



    let res = await fetch(`${api}?category=${value}&_page=1&_limit=20`)
    res = await res.json()
    console.log(res)
    renderDom(res)

}


document.getElementById("ss").addEventListener("change", function () {

    ss(1)
})


let ss = async (page) => {
    let value = document.getElementById("ss").value
    value = value.split(" ")
    let cat = value[0]
    let order = value[1]
    let res = await fetch(`${api}?category=mens&_sort=${cat}&_order=${order}&_page=${page}&_limit=40`)
    res = await res.json()
    console.log(res);
    renderDom(res)

}


let start = 1
let forward = document.createElement("button")
forward.innerText = ">"
forward.onclick = () => {

    start = start + 1
    show(start)
    getData(start)

}
let backward = document.createElement("button")
backward.innerText = "<"
backward.id = "backward"
backward.onclick = () => {

    start = start - 1
    show(start)
    getData(start)

}

let show = (page) => {
    let btn = document.getElementById("button")
    let btn1 = document.createElement("div")
    btn1.id = "btn1"

    btn.innerHTML = null
    let start = 1


    if (page > 3) {
        start = page - 2
    }

    for (let i = start; i < start + 5; i++) {

        let b = document.createElement("button")

        b.innerText = i
        b.style.border = "none"
        b.style.backgroundColor = "white"
        b.setAttribute("class", "b")
        btn1.append(b)
        btn.append(backward, btn1, forward)

        b.onclick = () => {
            getData(i - 1)


        }

    }



}



show(1)


document.getElementById("two").style.cursor = "pointer"

document.getElementById("two").addEventListener("click", function () {

    document.getElementById("two").style.cursor = "pointer"
    let p = document.getElementById("Product_section")

    p.style.cursor = "pointer"
    p.style.display = "grid"
    p.style.gridTemplateColumns = "repeat(2,1fr)"

    document.querySelector(".hps").style.width = "300px"
    document.querySelector(".hps").style.gap = "50px"
    document.querySelector(".hps").style.justifyContent = "space-between"

    document.querySelector(".product_img").style.width = "300px"
})

document.getElementById("three").style.cursor = "pointer"
document.getElementById("four").style.cursor = "pointer"


document.getElementById("three").addEventListener("click", function () {

    document.getElementById("three").style.cursor = "pointer"
    let p = document.getElementById("Product_section")

    p.style.cursor = "pointer"
    p.style.display = "grid"
    p.style.gridTemplateColumns = "repeat(3,1fr)"

    document.querySelector(".hps").style.width = "250px"
    document.querySelector(".hps").style.gap = "20px"
    document.querySelector(".hps").style.justifyContent = "space-between"

    document.querySelector(".product_img").style.width = "250px"
})


document.getElementById("four").addEventListener("click", function () {


    let p = document.getElementById("Product_section")

    p.style.gridTemplateColumns = "repeat(4,1fr)"


})












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

const URL = `https://modesens-data3.onrender.com/api/user`;

const signup = async () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        email,
        password,
        cart: []
    }
    let exist = await fetch(URL)
    exist = await exist.json();

    if (exist.find(e => e.email === email)) {
        /* same result as above, but a different function return type */
        alert(`${email} already exist.Please Login`);
        // window.location.href="./login.html"
        return;
    } else {
        await fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json",
            }
        });
        let form = document.getElementById("login_form");
        form.reset();
        alert(`Welcome ${name} to Modesens`)
        window.location.href = "/divine-society-1574/index.html"


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



let signin = async () => {
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    let data;
    try {
        data = await fetch(URL)
        data = await data.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    if (data.find(e => e.email == mail && e.password == pass)) {

        let form = document.getElementById("login_form");
        form.reset();
        alert('Login Successfull')
        window.location.href = "/divine-society-1574/index.html"
    } else {
        alert("Wrong Credentials")
    }

}


let gotoCart = document.getElementById("gotoCart")

gotoCart.onclick = () => {
    window.location.href = "./cart.html"
}









