
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

    
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipcode = document.getElementById('zipcode');
    const nameOnCard = document.getElementById('nameOnCard');
    const cardNo = document.getElementById('cardNo');
    const exp = document.getElementById('exp');
    const cvv = document.getElementById('cvv');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      checkInputs();
    });

    function checkInputs(){
      const firstNameValue = firstName.value.trim();
      const lastNameValue = lastName.value.trim();
      const phoneValue = phone.value.trim();
      const addressValue = address.value.trim();
      const cityValue = city.value.trim();
      const stateValue = state.value.trim();
      const zipcodeValue = zipcode.value.trim();
      const nameOnCardValue = nameOnCard.value.trim();
      const cardNoValue = cardNo.value.trim();
      const expValue = exp.value.trim();
      const cvvValue = cvv.value.trim();

      //FIRSTNAME
      if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name is required');
      } 
      else if(firstNameValue.length < 3 | firstNameValue.length > 20){
        setErrorFor(firstName, 'At least 3 characters and NOT exceed 20 characters!')
      }
      else{
        setSuccessFor(firstName);
      }

      //LASTNAME
      if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name is required');
      }
      else if(lastNameValue.length < 3 | lastNameValue.length > 20){
        setErrorFor(lastName, 'At least 3 characters and NOT exceed 20 characters!')
      }
      else{
        setSuccessFor(lastName);
      }

      //PHONE
      if(phoneValue === ''){
        setErrorFor(phone, 'Phone Number is required');
      } 
      else if(!phoneValue.value | phoneValue.length < 11){
        setErrorFor(phone, 'Can\'t be exceeded 10 numbers')
      }
      
      else{
        setSuccessFor(phone);
      }
      
      //ADDRESS
      if(addressValue === ''){
        setErrorFor(address, 'Shipping Address is required');
      } 
      
      else{
        setSuccessFor(address);
      }

      //CITY
      if(cityValue === ''){
        setErrorFor(city, 'City is required');
      } 
      
      else{
        setSuccessFor(city);
      }

      //STATE
      if(stateValue === ''){
        setErrorFor(state, 'State is required');
      } 
      
      else{
        setSuccessFor(state);
      }

      //ZIPCODE
      if(zipcodeValue === ''){
        setErrorFor(zipcode, 'Zip Code is required');
      } 
      
      else{
        setSuccessFor(zipcode);
      }

      //NAME ON CARD
      if(nameOnCardValue === ''){
        setErrorFor(nameOnCard, 'Name On Card is required');
      } 
      else if(nameOnCardValue.length < 3 | nameOnCardValue.length > 20){
        setErrorFor(nameOnCard, 'At least 3 characters and NOT exceed 20 characters!')
      }
      else{
        setSuccessFor(nameOnCard);
      }

      //CARD NUMBER
      if(cardNoValue === ''){
        setErrorFor(cardNo, 'Card Number is required');
      } 
      else if(cardNoValue.length > 17){
        setErrorFor(cardNo, 'Can\'t be exceeded 16 numbers')
      }
      
      else{
        setSuccessFor(cardNo);
      }

      //EXP DATE
      if(expValue === ''){
        setErrorFor(exp, 'Expiration Date is required');
      } 
      else if(expValue.length > 6){
        setErrorFor(exp, 'Must be mm/yy')
      }
      
      else{
        setSuccessFor(exp);
      }

      //CVV
      if(cvvValue === ''){
        setErrorFor(cvv, 'CVV Number is required');
      } 
      else if(cvvValue.length > 4){
        setErrorFor(cvv, 'Can\'t be exceeded 3 numbers')
      }
      
      else{
        setSuccessFor(cvv);
      }





    }

    function setErrorFor(input, message){
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');

      //add error message inside small
      small.innerText = message;

      //add error class
      formControl.className = 'form-control error';

    }

    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }


    
    
    