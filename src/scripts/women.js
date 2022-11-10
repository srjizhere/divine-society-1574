/* Slide show*/


let arr = [
    "https://modesens.com/banner/13927/getimg/?img=%2Fbanner%2F20221107-modesens-Double11-1140x400-EN_1667706245.jpg",
    "https://modesens.com/banner/14015/getimg/?img=%2Fbanner%2F20221109-modesens-Browns-1140x400-EN.jpg",
    "https://modesens.com/banner/13917/getimg/?img=%2Fbanner%2F20221107-modesens-Italist-1140x400-F-EN.jpg",
    "https://modesens.com/banner/13985/getimg/?img=%2Fbanner%2F20221108-modesens-FurTrim-1140x400-F_1667875747.jpg",
    "https://modesens.com/banner/13975/getimg/?img=%2Fbanner%2F20221107-modesens-lululemon-1140x400-F_1667788631.jpg",
    "https://modesens.com/banner/13853/getimg/?img=%2Fbanner%2F20221101-modesens-knittedvest-1140x400-F_1667273998.jpg"
]


let brandImgArray = [["https://cdn.modesens.com/banner/20211014-GUCCI-logo.png",
    "https://cdn.modesens.com/banner/20211014-PRADA-logo.png",
    "https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png",
    "https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png",
    "https://cdn.modesens.com/banner/20211014-FENDI-logo.png",
    "https://cdn.modesens.com/banner/20211014-FENDI-logo.png",
    "https://cdn.modesens.com/banner/20211014-VERSACE-logo.png",
    "https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png",
    "https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png",
    "https://cdn.modesens.com/banner/20211014-LOEWE-logo.png",
    "https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png",
    "https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png"

], ["https://cdn.modesens.com/banner/20220708-SSENSE-logo.png", "https://cdn.modesens.com/banner/20220708-SSENSE-logo.png", "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png", "https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png", "https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png", "https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png", "https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png", "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png", "https://cdn.modesens.com/banner/20220708-ITALIST-logo.png", "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png", "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png", "https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png"],
["https://cdn.modesens.com/banner/20220708-BLUEMERCURY-logo.png", "https://cdn.modesens.com/merchant/woolrich__logo.jpg?w=400", "https://cdn.modesens.com/merchant/visualmood-logo.png?w=400", "https://cdn.modesens.com/banner/20220708-MONTBLANC-logo.png", "https://cdn.modesens.com/banner/20220708-DR-MARTENS-logo.png", "https://cdn.modesens.com/banner/20220708-REPETTO-logo.png", "https://cdn.modesens.com/banner/20220708-NOBLEMARS-logo.png", "https://cdn.modesens.com/banner/20220708-ERNO-LASZLO-logo.png", "https://cdn.modesens.com/banner/20220708-D1MILANO-logo.png", "https://cdn.modesens.com/banner/20220708-LAPOINTE-logo.png", "https://cdn.modesens.com/banner/20220708-MONNALISA-logo.png", "https://cdn.modesens.com/banner/20220708-MANGO-logo.png"]
]

let offersArray = [
    {
        img: "https://modesens.com/banner/12036/getimg/?img=%2Fbanner%2F20220602-modesens-LuisaViaRoma-364x484-F.jpg"
        , title: "Step into Holiday with Bombas"
        , discount: "20% Off with code MODSENS"

    },
    {
        img:
            "https://modesens.com/banner/12487/getimg/?img=%2Fbanner%2F20220615Designer-Collab-modesens364x484-F.jpg"
        , title: "Our Kind of Dream Teams"
        , discount: "Beruardelli"

    },
    {
        img: "https://modesens.com/banner/12496/getimg/?img=%2Fbanner%2F20220616-modesens-Neutrals-364x484-F.jpg",
        title: "The Party Dress Edit",
        discount: "Prepare to make an entrancr"
    }
    ,
    {
        img: "https://cdn.modesens.com/static/img/20190408-Mens.jpg",
        title: "The November  Gift is here ",
        discount: "Up to 70% Off"
    }
    ,
    {
        img: "https://modesens.com/banner/12478/getimg/?img=%2Fbanner%2F20220615-modesens-SummerFashionGuide-364x484.jpg",
        title: "Fashion Guide ",
        discount: "New Trends"
    }
    ,
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xHwaXQa47hzWi-ZviKzI7QmAIzlHWnt38A&usqp=CAU",
        title: "Super Cool Capsules ",
        discount: "Upto 50% Off"
    }
]




let brandtag = ["Featured Partners", "New Partners and Designers"]

tagline = ["Get the look you want. Choose from over 12,000+ brands and designers.", "Check out the new retail partners and brands who just joined the ModeSens family.", "Check out the new retail partners and brands who just joined the ModeSens family."]


time = true
let div = document.getElementById("cont");
let img = document.createElement("img");
let p = document.createElement("p")
p.setAttribute("class", "numbertext")
let i = 0



let slideShow = () => {
    //div.innerHTML=null
    // setInterval(function () {
    if (i == arr.length) {
        i = 0;
    }
    img.src = arr[i];
    p.innerText = `${i + 1}/6`

    i = i + 1;
    div.append(img, p);
    // }, 3000); 
}



let show = (i) => {



    img.src = arr[i]
    div.append(img)

}



let myinterval = setInterval(slideShow, 3000)



let button = document.getElementById("stop")


div.onclick = () => {

    time = false;
    clearInterval(myinterval)
    document.querySelector("#stop").innerText = "start"
}


div.onclick = () => {
    time = true
    document.querySelector("#stop").innerText = "stop"

    myinterval = setInterval(slideShow, 3000)
}

button.onclick = () => {

    if (time) {
        stop();
    } else {
        start()
    }
}

let u = 1
let next = () => {

    u++
    show(u)
    console.log(u)
}

if (u == 0) {
    document.getElementById("pre").disabled = true
} else {
    document.getElementById("pre").disabled = false
    show(u)
}
let pre = () => {
    u--

    show(u)
    console.log(u);
}


//brand Line

let brand_Container = document.getElementById("brand_Container")
let h2 = document.createElement("h2")
let brandLine = document.createElement("div")



let bityMax = () => {
    setInterval(() => {

    }, 3000);



}
function bitWar() {

    let bitSix = () => {

        let i = 0;
        let div = document.getElementById("brand_Container");
        let brand = document.createElement("div")
        brand.setAttribute("class", "barndtag")
        let h2 = document.createElement("h2");

        h2.innerText = brandtag[0];

        div.append(h2);

        i = i + 1;
        setInterval(function () {
            if (i == 2) {
                i = 0;
            }
            h2.innerText = brandtag[i];

            i = i + 1;
            brand.append(h2)

        }, 60000);
        div.append(brand);
    }

    bitSix()
    let line = () => {
        let i = 0;
        let div = document.getElementById("brand_Container");
        let tg = document.createElement("div")
        tg.setAttribute("class", "tagline")
        let h2 = document.createElement("h3");

        h2.innerText = tagline[0];

        div.append(h2);

        i = i + 1;
        setInterval(function () {
            if (i == 3) {
                i = 0;
            }
            h2.innerText = tagline[i];

            i = i + 1;
            tg.append(h2)

        }, 60000);
        div.append(tg);

    }

    line()
}

bitWar()

let brandSec = () => {
    let cont = document.getElementById("brand_Container")
    let main = document.createElement("div")
    btnBox1 = document.createElement("div")
    btnBox2 = document.createElement("div")
    let page = 0
    let main1 = document.createElement("div")
    main1.setAttribute("class", "brandLogo")
    let brandRender = (page) => {
        // cont.innerHTML = null
        main1.innerHTML = null
        let n = 12

        for (let i = 0; i < n; i++) {

            let brandBox = document.createElement("div")
            let brandLogo = document.createElement("img")
            brandLogo.src = brandImgArray[page][i]
            //  console.log(page);
            brandBox.append(brandLogo)
            main1.append(brandBox)

        }
        main.append(main1)
        cont.append(main)

    }


    brandRender(page)

    let nextt = document.createElement("button")
    nextt.innerText = ">"



    let prev = document.createElement("button")
    prev.innerText = "<"
    nextt.id = "brand_next"
    prev.id = "brand_prev"

    prev.onclick = () => {
        if (page === 0) {
            page = 2
            brandRender(page)
        } else {
            page--
            brandRender(page)
        }

    }


    nextt.onclick = () => {
        if (page === 2) {
            page = 0
            brandRender(page)
        } else {
            page++
            brandRender(page)
        }
    }
    cont.append(prev, nextt)
}


brandSec()


let off = () => {

    let jd = document.getElementById("jd")
    let start = 0
    let offers = (start) => {

        jd.innerHTML = null

        for (let i = start; i < start + 3; i++) {

            let mainDiv = document.createElement("div")
            mainDiv.setAttribute("class", "banner")

            let img = document.createElement("img")
            img.src = offersArray[i].img

            let h3 = document.createElement("h3")
            h3.innerText = offersArray[i].title

            let p = document.createElement("p")
            p.innerText = offersArray[i].discount

            let but = document.createElement("button")
            but.innerText = "SHOP NOW"

            mainDiv.append(img, h3, p, but)

            jd.append(mainDiv)
        }


    }

    offers(start)
    let nextt = document.createElement("button")
    nextt.innerText = ">"
    nextt.setAttribute("class", "forward")



    let prev = document.createElement("button")
    prev.innerText = "<"

    prev.onclick = () => {
        if (start === 0) {
            start = 5

            offers(start)
        } else {
            start--
            offers(start)
        }
    }


    nextt.onclick = () => {
        if (start === 4) {
            start == 0


            offers(0)
        } else {

            start++
            offers(start)
        }

    }

    document.getElementById("Sbtn").append(prev, nextt)




}

off()



//recent appender 
let recentAppender = () => {
    let api = "https://modesens-data3.onrender.com/api/product?category=womens"
    let getData = async () => {

        let res = await fetch(api)
        res = await res.json()
        var start = 0
        renderDom(res, start)

        document.getElementById("recentBtnNxt").addEventListener("click", function () {

            start++

            renderDom(res, start)

        })

        document.getElementById("recentBtnPre").addEventListener("click", function () {

            start--

            renderDom(res, start)

        })
    }


    getData()


    let cont = document.getElementById("recent_append")
    renderDom = (arr, start) => {
        cont.innerHTML = null
        for (let i = start; i < start + 4; i++) {
            let div = document.createElement("div")
            let img = document.createElement("img")
            img.setAttribute("class", "lld")
            img.src = arr[i].image_url
            let brand = document.createElement("p")
            brand.innerText = arr[i].brand
            let title = document.createElement("p")
            title.innerText = arr[i].title
            let price = document.createElement("p")
            price.innerText = `$ ${arr[i].price}`

            div.append(img, brand, title, price)
            cont.append(div)
        }
    }



}

recentAppender()