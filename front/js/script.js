fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(products) {
        console.log(products);
        for(let i = 0; i < products.length;i++) {
            let prod = products[i];
            console.log(prod);

            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${prod._id}`;
            console.log(productLink);

            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);
            console.log(productArticle);

            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = prod.imageUrl;
            productImg.alt = prod.altTxt;
            console.log(productImg);

            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = prod.name;
            console.log(productName);

            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productDescription");
            productDescription.innerHTML = prod.description;
            console.log(productDescription);
        }
    })
    .catch (function(error){
        return error;
    });


