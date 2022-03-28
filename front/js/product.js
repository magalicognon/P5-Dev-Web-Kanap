let str = window.location.href;
let url = new URL(str);
let idProduct = url.searchParams.get("id");
console.log(idProduct);

getArticle();

function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (article) {
            if (article) {
                getPost(article);
                console.log(article);
            }
        })
        .catch(function (error) {
            return error;
        });
}

function getPost(article) {
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;
    console.log(productImg);

    let productName = document.getElementById('title');
    productName.innerHTML = article.name;
    console.log(productName);

    let productPrice = document.getElementById('price');
    productPrice.innerHTML = article.price;
    console.log(productPrice);

    let productDescription = document.getElementById('description');
    productDescription.innerHTML = article.description;
    console.log(productDescription);

    for (let colors of article.colors){
        console.log(colors);
        let productColors = document.createElement("option");
        document.querySelector("#colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }

}