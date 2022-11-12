function shop_from_men_srj(){
    window.location.href = "./men.html"
}
function shop_from_women_srj(){
    window.location.href = "./women.html"
}
function shop_from_kids_srj(){
    window.location.href = "./women.html"
}
let url = "https://modesens-data3.onrender.com/api/product";

let getdata = async()=>{
    
    let data = await fetch(url);
    
   let res =await data.json()
    console.log(res);
    reducarr(res)

    
}
getdata()

 function reducarr(res){
    let datarr = new Array(10)

    for(let i = 0;i<10;i++){
        datarr[i]=res[i]
    }
console.log(datarr);
rendercartimgsrj(datarr)
}


function rendercartimgsrj(dataa){
    let containerbody = document.getElementById("cartimgsrj");
    if(dataa[0]!=null){
        document.getElementById("srjscrth31").innerText= "SHOP NOW BEST SALE"
        document.getElementById("srjcrth3").innerText= "Free Delivery On Order Over $10"

        containerbody.innerHTML=null;
       let datacontainersrj= document.createElement("div");
       datacontainersrj.id="displaygridsrj";
      containerbody.append(datacontainersrj);
            let totalcost = 0;
      dataa.forEach(e => {
        totalcost += e.price
          let brand = document.createElement("h3");
          let container = document.createElement("div");
          container.className = "pouchsrj"
          brand.innerText = e.brand
          imag = document.createElement("img");
          imag.src = e.image
          let imgsrjcont = document.createElement("div");
          imgsrjcont.className = "imgcontsrj"
          imgsrjcont.append(imag)
          let title= document.createElement("h3");
          title.innerText =e.title;
          let price = document.createElement("h3");
          price.innerText= `PRICE- $ ${e.price}`

          let btn = document.createElement("button");
          btn.innerText = "SHOP NOW!";
          btn.className = "srjcartbtn"
          let rbtn = document.createElement("button");
          rbtn.innerText = "REMOVE";
          rbtn.className = "srjremovebtn"







            container.append(brand,imgsrjcont,title,price,rbtn)
            datacontainersrj.append(container)
            
        });
        document.querySelector("#totalcost>button").innerText = `TOTAL CART VALUE ${totalcost} $`
    };
}

function srj_goto_checkout(){
    window.location.href = "./checkout/checkout.html"
}