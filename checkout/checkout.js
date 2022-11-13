

// let cartData= JSON.parse(localStorage.getItem("cart"))
// console.log(cartData)
let url = "https://modesens-data3.onrender.com/api/cart";

let getdata = async () => {

        let data = await fetch(url);

        let res = await data.json()
        console.log(res);
        reducarr(res)
}
getdata()

function reducarr(res) {
        let sum = 0;

        res.forEach(e => {
                showtable(e);
        });



        function showtable(e) {
                let save_data = document.querySelector(".saveddata");
                sum = sum + e.price
                console.log(e.price);
                let div = document.createElement('div');


                let image = document.createElement('img');
                image.src = e.image || e.image_url;

                let para_div = document.createElement('div');
                let para_ = document.createElement('p');
                para_.innerHTML = e.title;
                para_div.append(para_)

                let para_2 = document.createElement('p');
                para_2.innerHTML = `$ <span id="amount">${e.price}</span>`;

                div.append(image, para_div, para_2);
                save_data.append(div);
        }
        function rendersum() {

                let netamtt = document.getElementById("netamt");
                console.log(netamtt);
                netamtt.innerHTML = `$  ${sum}`;
                let GST = sum * (28 / 100);
                GST = Math.floor(GST)
                let taxdes = document.querySelector(".one>p");
                taxdes.innerHTML = `including $ ${GST} in taxes`;

                document.querySelector(".netamt2").innerHTML = sum + GST
        }

        rendersum(sum)


}

