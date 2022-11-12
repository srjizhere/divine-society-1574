/*GET /posts?_page=7
GET /posts?_page=7&_limit=20 */


import navbar from "../components/navbar.js"
import { srj_footer } from "../components/footer.js"


let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

document.getElementById("footer").innerHTML = srj_footer()



let api = "https://modesens-data3.onrender.com/api/product"
let getData = async (page, limit) => {

    let res = await fetch(`${api}?category=mens&_page=${page}`)
    res = await res.json()

    renderDom(res)

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
            window.location.href = "productDetails/product.html"
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

    ss()
})


let ss = async () => {
    let value = document.getElementById("ss").value
    value = value.split(" ")
    let cat = value[0]
    let order = value[1]
    let res = await fetch(`${api}?category=mens&_sort=${cat}&_order=${order}&_page=${page}&_limit=20`)
    res = await res.json()
    console.log(res);
    renderDom(res)

}


let show = () => {
    let btn = document.getElementById("button")
    let btn1 = document.createElement("div")
    btn1.id = "btn1"

    btn.innerHTML = null
    let start = 1


    // if (page > 4) {
    //     start = page - 2
    // }

    for (let i = 0; i < start + 4; i++) {

        let b = document.createElement("button")

        b.innerText = i + 1

        b.style.border = "none"
        b.style.backgroundColor = "white"
        b.setAttribute("class", "b")
        btn1.append(b)
        btn.append(btn1)

        b.onclick = () => {
            getData(i - 1)


        }

    }



}



show()