// export default getCartFromLs();

// module.exports=getCartFromLs
async function cardExcess() {

  try {
    const reponse = await fetch("https://fakestoreapi.com/products");
    const data = await reponse.json();
    // console.log(data);
    data.map((data) => {
      //////////////////////////////////////////

      let id = data.id;
      // console.log(id_no);
      let cardHolder = document.createElement("div");
      cardHolder.setAttribute("class", "cardholder")
      cardHolder.setAttribute('id', `card${data.id}`)
      console.log(cardHolder);
     

      document.querySelector(".cards").appendChild(cardHolder);
      ////////////////////////////////////////////////
      let image_container = document.createElement("div");
      image_container.setAttribute('class', 'image_container')
      
      //////////////////////////////////////
      let image = document.createElement("img");
      image_container.appendChild(image);
      image.setAttribute('class', 'cards_image')
     
     
      ////////////////////////////////////

      image.src = data.image;
      image_container.appendChild(image);
      cardHolder.appendChild(image_container);
      ///////////////////////////////////
      let title_container = document.createElement('div');
      title_container.setAttribute('class', 'cards_title')
      title_container.innerHTML = data.title
      image_container.after(title_container)
      ////////////////////
     
      ////////////////////////
      let item_price = document.createElement('div')
      item_price.setAttribute('class', 'item_price')
      item_price.innerHTML = `$ ${data.price}`
      title_container.after(item_price)
      /////////////////////////////////   
      let addtocart = document.createElement('a')
      addtocart.setAttribute('class', 'addtocart');
      addtocart.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to Cart`
      item_price.after(addtocart)
      ////////////////////////////////////////////////
      let rating_container = document.createElement('div')
      rating_container.setAttribute('class', 'cards_rating')
      rating_container.innerHTML = data.rating.rate;
      addtocart.after(rating_container)
      /////////////
      let description_container = document.createElement('p')
      description_container.setAttribute('class', 'cards_description')
      description_container.innerHTML = data.description;
      description_container.style.display="none"
      rating_container.after(description_container)
   
     
      //

      let buy_button_container = document.createElement('a')
      buy_button_container.href = '#'
      buy_button_container.innerHTML = "Buy now"
      buy_button_container.setAttribute('class', 'buy_button_container')
      // buy_button_container.innerHTML="Buy now"
      rating_container.after(buy_button_container)
      ////////////////////
      addtocart.addEventListener('click', (e) => {
        add(e, id)
        function add(e, id) {
          let currentElement = document.querySelector(`#card${id}`)
          // console.log(currentElement);
          let image = currentElement.querySelector('.cards_image').src;
          // console.log(image);
          let price = currentElement.querySelector('.item_price').innerText;
          
          let description=currentElement.querySelector('.cards_description').innerText;
          console.log(description);
      
          // console.log(description);
          price = price.replace("$", "")
          console.log(price);
          getCartFromLs()


          let localStorageproduct = getCartFromLs();
          // console.log(localStorageproduct);
          localStorageproduct.push({ image, price,description })
          localStorage.setItem('cartProductls', JSON.stringify(localStorageproduct))
        }
        // let getimage=localStorage.getItem("image")
        // let getprice=localStorage.getItem('price')


        function getCartFromLs() {
          let cartProducts = localStorage.getItem('cartProductls')
          if (!cartProducts) {
            return []
          }
          cartProducts = JSON.parse(cartProducts)
          return cartProducts;
        }
      })

      
      





      ////////////////
      
      
      console.log("done");

    });
  } catch (error) {
    console.log(error);
  }
}
cardExcess();


