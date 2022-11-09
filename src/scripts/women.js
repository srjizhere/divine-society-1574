/* Slide show*/


let arr = [
    "https://modesens.com/banner/13927/getimg/?img=%2Fbanner%2F20221107-modesens-Double11-1140x400-EN_1667706245.jpg",
    "https://modesens.com/banner/14015/getimg/?img=%2Fbanner%2F20221109-modesens-Browns-1140x400-EN.jpg",
    "https://modesens.com/banner/13917/getimg/?img=%2Fbanner%2F20221107-modesens-Italist-1140x400-F-EN.jpg",
    "https://modesens.com/banner/13985/getimg/?img=%2Fbanner%2F20221108-modesens-FurTrim-1140x400-F_1667875747.jpg",
    "https://modesens.com/banner/13975/getimg/?img=%2Fbanner%2F20221107-modesens-lululemon-1140x400-F_1667788631.jpg",
    "https://modesens.com/banner/13853/getimg/?img=%2Fbanner%2F20221101-modesens-knittedvest-1140x400-F_1667273998.jpg"
]


let brandImgArray = ["https://cdn.modesens.com/banner/20211014-GUCCI-logo.png",
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



let myinterval = setInterval(slideShow, 20000)



let button = document.getElementById("stop")


div.onclick = () => {

    time = false;
    clearInterval(myinterval)
    document.querySelector("#stop").innerText = "start"
}


div.onclick = () => {
    time = true
    document.querySelector("#stop").innerText = "stop"

    myinterval = setInterval(slideShow, 30000)
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
//using setInterval() to make an image slider

//function newDate(){
//console.log(new Date());};
//setInterval(newDate, 3000);  

//the above code would console.log the date every 3seconds 

//$(selector).animate(obj,time,callback);
//callback-do something after the animation is complete

(document).ready(function () {
    //seInterval animate margin-left and the last slide go to the first position (0px) 

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    // try and configure all the variables so that you can change it at any point( things of the same type at the same place)

    var $slider = $("#slider");
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    //the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
    var interval;
    //have to define the variable outside startSlider() to have it in the scope of a function call

    function startSlider() {
        interval = setInterval(function () {
            $($slideContainer).animate({
                "margin-left": "-=" + width
            }, animationSpeed, firstSlide);
        }, pause);

        function firstSlide() {
            currentSlide++;
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css("margin-left", 0);
            }
        }
    }

    function stopSlider() {
        clearInterval(interval);
    }
    $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

    startSlider();
});