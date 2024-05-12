

console.log("hello");
newproducts()
function newproducts() {
    // let cart_detail=await fetch('https://fakestoreapi.com/products');
    let cart_data = JSON.parse(localStorage.getItem('cartProductls'));

    console.log(cart_data);
    cart_data.forEach((item) => {
        let card_detail = document.querySelector('.shopping_cart_detail');
        let full_cart_detail = document.createElement('div')
        full_cart_detail.style.border = "2px solid red"
        full_cart_detail.setAttribute('class','full_cart_detail')
        card_detail.appendChild(full_cart_detail)

        let cart_image_container = document.createElement('div');
        cart_image_container.setAttribute('class', 'cart_image_container');
        full_cart_detail.appendChild(cart_image_container)
        let cart_image = document.createElement('img')
        cart_image.setAttribute('class', 'cart_image')
        cart_image.src = item.image;
        cart_image_container.appendChild(cart_image);
        let description_cart = document.createElement('div');
        description_cart.innerHTML = item.description;
        description_cart.setAttribute("class", 'description_cart')
        cart_image_container.after(description_cart)
        // card_detail.appendChild(description_cart)
        // cart_image_container.after(description_cart)
        let price_container_Cart=document.createElement('p')
    price_container_Cart.setAttribute('class','price_container_cart')
    price_container_Cart.innerText=`price= ${item.price*83} `
    description_cart.after(price_container_Cart)
    let delete_button=document.createElement('button')
    delete_button.setAttribute('class','delete_button')
    delete_button.innerText="Delete"
    price_container_Cart.after(delete_button)
    
    







    })

}

// console.log(card_detail);





