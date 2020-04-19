(function () {
    var itemList = 
    [
      {
        "id": 1,
        "name": "Blazer",
        "description": "Straight-cut Blazer",
        "imgHref": "./blazer.jfif",
        "price": "33.99",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "Blouse",
        "description": "Wide-cut Blouse",
        "imgHref": "./blouse.jfif",
        "price": "14.99",
        "quantity": 7
      },
      {
        "id": 3,
        "name": "Croptop",
        "description": "Tie-back Top",
        "imgHref": "./croptop.jfif",
        "price": "10.99",
        "quantity": 8
      },
      {
        "id": 4,
        "name": "Dress",
        "description": "Short Denim Dress",
        "imgHref": "./dress.jfif",
        "price": "89.99",
        "quantity":3
      },
      {
        "id": 5,
        "name": "Hoodie",
        "description": "Pullover Hoodie",
        "imgHref": "./hoodie.jfif",
        "price": "49.99",
        "quantity": 5
      },
      {
        "id": 6,
        "name": "Jacket",
        "description": "Distressed Denim Jean Jacket",
        "imgHref": "./jacket.jfif",
        "price": "99.99",
        "quantity": 24
      },
      {
        "id": 7,
        "name": "Jean",
        "description": "Fashion Jean",
        "imgHref": "./jean.jfif",
        "price": "39.99",
        "quantity": 15
      },
      {
        "id": 8,
        "name": "Pant",
        "description": "Paper-bag Pant",
        "imgHref": "./pant.jfif",
        "price": "29.99",
        "quantity": 10
      },
      {
        "id": 9,
        "name": "Accessories",
        "description": "Soft Scarf",
        "imgHref": "./scarf.jfif",
        "price": "9.99",
        "quantity": 12
      },
      {
        "id": 10,
        "name": "Sweater",
        "description": "Sweater with Dolman Sleeves",
        "imgHref": "./sweater.jfif",
        "price": "3.99",
        "quantity": 10
      },
      {
        "id": 11,
        "name": "Tshirt",
        "description": "T-shirt in soft jersey",
        "imgHref": "./tshirt.jfif",
        "price": "18.99",
        "quantity": 12
      },
      {
        "id": 12,
        "name": "Skirt",
        "description": "Short Jersey Skirt",
        "imgHref": "./skirt.jfif",
        "price": "27.99",
        "quantity": 20
      }
    ];

function  initItems(){
  var product = localStorage.getItem('product');
  var productData = JSON.parse(product);  
  console.log(productData);
  
  var left = document.getElementsByClassName('left'); 

  var image = document.createElement('img');
  //image.className = "thumbnail";
  image.src = "./picture/" + productData.imgHref;
  image.style = "width:300px;height:350px;";
  left[0].appendChild(image)

  //Import product image
  var right = document.getElementsByClassName('right');

  var productName = document.createElement('h2');
  productName.textContent = productData.name
  right[0].appendChild(productName);

  var productDescription = document.createElement('h4');
  productDescription.textContent = productData.description;
  right[0].appendChild(productDescription)

  var price = document.createElement('h5');
  price.textContent = "Price: $" + productData.price;
  right[0].appendChild(price); 

  var inputDiv = document.createElement('div');
  inputDiv.className ="inputDiv";
  right[0].appendChild(inputDiv);

  var inputDiv1 = document.getElementsByClassName("inputDiv");
  var quantityInput = document.createElement('input');
  quantityInput.type = "number";
  quantityInput.id = "number";
  inputDiv1[0].appendChild(quantityInput);
  
  //Create button
  var button = document.createElement('button');
  button.type = "button";
  button.className = "button";
  button.value = productData;
  right[0].appendChild(button);  

  var anchor = document.getElementsByClassName('button');
  var link = document.createElement('a');
  link.href = "form.html";
  link.appendChild(document.createTextNode("Add to cart"));
  anchor[0].appendChild(link);

  //Send object to next page
  productData.quantity = document.getElementById('number').value;
  link.addEventListener('click', function() { 
    localStorage.setItem('productData', JSON.stringify(productData))
    }, false);
}

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {        
        initItems();        
    }
  };

  })();
  
