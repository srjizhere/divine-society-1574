

const api = `https://modesens-data3.onrender.com/api/new`;

document.getElementById('submit').addEventListener('click', () => {
    addProduct(event);
});


const addProduct = async(e) => {
    e.preventDefault();
    let form = document.getElementById("form");
    let title = document.getElementById('title').value;
    let image = document.getElementById('image').value;
    let price = document.getElementById("price").value;
    let description = document.getElementById('description').value;
    let discount = document.getElementById('discount').value;
    let brand = document.getElementById('brand').value;
    let category = document.getElementById('category').value;

    let data = { id: Date.now() + Math.random() * 100, title, image, price, description, discount, brand, category };
    console.log(data)

    //POST
    await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
           "Content-Type": "application/json",
        },
    });

    form.reset();
    console.log("done");
    getdata();
}


//fetching data from server
async function getdata(){
    try{
        let res=await fetch(api)
        let data = await res.json()
        console.log(data)
        renderDom(data);
    }catch(error){
        console.log(error);
    }
}
getdata();

let pacakagedata=({id,title,price,brand,image,discount,category})=>{
    let tr=document.createElement('tr');
    tr.setAttribute('class','card_row');

    let n=document.createElement("td");
    let p=document.createElement("td");
    let l=document.createElement("td");

    let b=document.createElement("td");
    let img=document.createElement('img')
    img.setAttribute('class','card_img')
    img.src=image;
    b.append(img)

    let d=document.createElement("td");

    let pro=document.createElement('td')
    
    n.innerText=title;
    p.innerText=`₹${price}`
    l.innerText=brand;
    d.innerText=discount;
    pro.innerText = category;

    tr.append(n,p,l,b,d,pro)
    return tr;

}

//get the container and append all the data
let renderDom=(data)=>{
    let cont=document.getElementById('container')
    cont.innerHTML = null;
    let count = 0;
    data.forEach((el) => {
        // if (count == 20) {
        //     return;
        // }
        // count++;
        let card = pacakagedata(el);
        cont.append(card);
    });
}

