window.onload = (() => {
    let form = document.getElementById("addProduct");
    form.onsubmit = () => {
        addProduct(event);
    };
});
// document.getElementById("navbar").innerHTML = navbar();

const api = `https://perfect-tam-toad.cyclic.app/api/product`;
// const api = `https://mock-server-bipin.onrender.com/api/product`;

let addProduct = async(e) => {
    e.preventDefault()
    let form = document.getElementById("addProduct");

    let title = form.title.value;
    let image = form.image.value;
    let price = form.price.value;
    let description = form.description.value;
    let discount = form.discount.value;
    let size = form.size.value;
    let category = form.category.value;

    let data = { id: Date.now() + Math.random() * 100,title, image, price ,description,discount, size,category };

    //POST
    await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
           "Content-Type": "application/json",
        },
    });

    form.reset();

}