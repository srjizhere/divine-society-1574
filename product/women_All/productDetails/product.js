



import navbar from "./components/navbar.js"
import { srj_footer } from "./components/footer.js"

document.getElementById("navbar").innerHTML = navbar()


document.getElementById("footer").innerHTML = srj_footer()


let id = JSON.parse(localStorage.getItem("id"))

let api = "https://modesens-data3.onrender.com/api/product"
let getData = async (page) => {

    let res = await fetch(`${api}?id=${id}`)
    res = await res.json()

    renderDom(res)

    console.log(res);
}
getData()


let renderDom = (data) => {
    let textt = document.getElementById("productText")



    data.forEach((el, i) => {

        let text = document.createElement("p")
        text.innerText = `MODESENS / DESIGNERS / ${el.brand} / ${(el.category).toUpperCase()}`
        text.style.fontWeight = "bold"
        text.style.fontSize = "20px"
        text.style.marginLeft = "12px"
        textt.append(text)

        let img = document.createElement("img")
        img.src = el.image_url || el.image

        document.getElementById("img").append(img)

        let visit = document.createElement("div")
        visit.id = "visit"
        visit.innerText = `Visit ${el.brand} for more details`

        let firstSeen = document.createElement("div")
        firstSeen.innerText = `First seen in Nov 2021`

        document.getElementById("showMonth").append(visit, firstSeen)


        let parcent = Math.round((el.price * 100) / el.discount)

        let brand = document.createElement("h3")
        brand.innerText = el.brand
        brand.id = "brand"

        let price = document.createElement("p")
        let redPrice = document.createElement('p')
        redPrice.innerText = `$${el.price}(${parcent}%)`
        redPrice.style.color = "red"
        price.innerText = `- $${el.discount} `
        let priceDiv = document.createElement("div")
        priceDiv.style.display = "flex"
        priceDiv.id = "priceDiv"
        priceDiv.append(redPrice, price)

        let title = document.createElement("p")
        title.innerText = el.title
        title.id = "title"

        let shop = document.createElement("p")
        shop.id = "shop"
        shop.innerText = `Shop from ${Math.round(Math.random() * 10)} Store`

        let num = Math.round(Math.random() * 100)
        // num.style.color = "red"

        let point = document.createElement("p")
        point.id = "point"
        point.innerText = `Earn up to ${num} points when you buy`


        document.getElementById("Details_Section").append(brand, title, priceDiv, shop, point)
    });

}







document.querySelector(".fa-solid").addEventListener("click", function (event) {
    event.preventDefault()

    document.querySelector(".fa-solid").style.color == "red"






})