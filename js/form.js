(function () {
    var itemList = 
    [
      {
        "id": 1,
        "name": "Blazer",
        "description": "Straight-cut Blazer",
        "imgHref": "./blazer.jfif",
        "price": "33.99",
        "quantity": "10"
      },
      {
        "id": 2,
        "name": "Blouse",
        "description": "Wide-cut Blouse",
        "imgHref": "./blouse.jfif",
        "price": "14.99",
        "quantity": "7"
      },
      {
        "id": 3,
        "name": "Croptop",
        "description": "Tie-back Top",
        "imgHref": "./croptop.jfif",
        "price": "10.99",
        "quantity": "8"
      },
      {
        "id": 4,
        "name": "Dress",
        "description": "Short Denim Dress",
        "imgHref": "./dress.jfif",
        "price": "89.99",
        "quantity": "3"
      },
      {
        "id": 5,
        "name": "Hoodie",
        "description": "Pullover Hoodie",
        "imgHref": "./hoodie.jfif",
        "price": "49.99",
        "quantity": "5"
      },
      {
        "id": 6,
        "name": "Jacket",
        "description": "Distressed Denim Jean Jacket",
        "imgHref": "./jacket.jfif",
        "price": "99.99",
        "quantity": "24"
      },
      {
        "id": 7,
        "name": "Jean",
        "description": "Fashion Jean",
        "imgHref": "./jean.jfif",
        "price": "39.99",
        "quantity": "15"
      },
      {
        "id": 8,
        "name": "Pant",
        "description": "Paper-bag Pant",
        "imgHref": "./pant.jfif",
        "price": "29.99",
        "quantity": "10"
      },
      {
        "id": 9,
        "name": "Accessories",
        "description": "Soft Scarf",
        "imgHref": "./scarf.jfif",
        "price": "9.99",
        "quantity": "12"
      },
      {
        "id": 10,
        "name": "Sweater",
        "description": "Sweater with Dolman Sleeves",
        "imgHref": "./sweater.jfif",
        "price": "3.99",
        "quantity": "10"
      },
      {
        "id": 11,
        "name": "Tshirt",
        "description": "T-shirt in soft jersey",
        "imgHref": "./tshirt.jfif",
        "price": "18.99",
        "quantity": "12"
      },
      {
        "id": 12,
        "name": "Skirt",
        "description": "Short Jersey Skirt",
        "imgHref": "./skirt.jfif",
        "price": "27.99",
        "quantity": "20"
      }
    ];

function  initItems(){
  var productData = JSON.parse(localStorage.getItem('productData'));
  console.log(productData);
  
}

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {        
        initItems();        
    }
  };

  })();
  
