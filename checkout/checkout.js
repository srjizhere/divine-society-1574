

// let cartData= JSON.parse(localStorage.getItem("cart"))
// console.log(cartData)
let url = "https://modesens-data3.onrender.com/api/product";

let getdata = async()=>{
        
        let data = await fetch(url);
        
        let res =await data.json()
        console.log(res);
        reducarr(res)   
}
getdata()

function reducarr(res){
        let datarr = new Array(5)
        let sum = 0;
        for(let i = 0;i<5;i++){
                datarr[i]=res[i]
        }
        console.log(datarr);
        datarr.forEach(({image,price,title}) => {
                showtable(image,title,price);
        });
        


        function  showtable(img,pname,price){
        let save_data= document.querySelector(".saveddata");
        sum = sum+price
console.log(price);
let div = document.createElement('div');


let image= document.createElement('img');
image.src=`${img}`;

let para_div=document.createElement('div');
let para_ =document.createElement('p');
para_.innerHTML= pname;
para_div.append(para_)

let para_2 =document.createElement('p');
para_2.innerHTML=`$ <span id="amount">${price}</span>`;

div.append(image,para_div,para_2);
save_data.append(div);
}
function rendersum(){

let netamtt=document.getElementById("netamt");
console.log(netamtt);
netamtt.innerHTML =`$  ${sum}`;
let GST= sum*(28/100);
GST = Math.floor(GST)
let taxdes=document.querySelector(".one>p");
taxdes.innerHTML=`including $ ${GST} in taxes`;

document.querySelector(".netamt2").innerHTML=sum+GST
}

rendersum(sum)


}