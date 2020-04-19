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


    var x = document.getElementsByClassName('form_order');
    var createform = document.createElement('form');
    createform.setAttribute("action", "");
    createform.setAttribute("method", "post");
    x.appendChild(createform);

    var heading = document.createElement('h2');
    heading.innerHTML = "Order Form";
    createform.appendChild(heading);

    var line = document.createElement('hr');
    createform.appendChild(line);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var namelabel = document.createElement('label');
    namelabel.innerHTML = "Your Name: ";
    createform.appendChild(namelabel);

    var inputelement = document.createElement('input');
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name","dname");
    createform.appendChild(inputelement);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var emaillabel = document.createElement('label'); // Create Label for E-mail Field
    emaillabel.innerHTML = "Your Email : ";
    createform.appendChild(emaillabel);

    var emailelement = document.createElement('input'); // Create Input Field for E-mail
    emailelement.setAttribute("type", "text");
    emailelement.setAttribute("name", "demail");
    createform.appendChild(emailelement);

    var emailbreak = document.createElement('br');
    createform.appendChild(emailbreak);

    var messagelabel = document.createElement('label'); // Append Textarea
    messagelabel.innerHTML = "Your Message : ";
    createform.appendChild(messagelabel);

    var texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "dmessage");
    createform.appendChild(texareaelement);

    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    var submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    createform.appendChild(submitelement);

    }

    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {        
        initItems();        
    }
    };

    })();

