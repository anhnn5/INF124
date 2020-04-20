
  (function () {

    let productData;
    var total;
      
  function  initItems(){
     this.productData = JSON.parse(localStorage.getItem('productData'));
      console.log(this.productData);
        var itemName = document.getElementById("itemName");
        itemName.textContent = this.productData.name;
        
        var itemQuantity = document.getElementById("itemQuantity");
        itemQuantity.textContent = this.productData.quantity;

        var itemPrice = document.getElementById("itemPrice");
        itemPrice.textContent = "$" + this.productData.price;

        var shippingPrice = document.getElementById("option").value;
        var itemShippingPrice = document.getElementById("shippingMethod");
        itemShippingPrice.textContent = "$" + shippingPrice;

        this.total = this.productData.quantity*this.productData.price + parseInt(shippingPrice);
        document.getElementById("total").textContent = "$" + this.total;

     } 

    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {        
        initItems();        
    }
    };  

    })();

    function getShippingPrice(){  
      var shippingPrice = document.getElementById("option").value;
      var itemShippingPrice = document.getElementById("shippingMethod");
      itemShippingPrice.textContent = shippingPrice;

      this.total = this.productData.quantity*this.productData.price + parseInt(shippingPrice);
      document.getElementById("total").textContent = "$" + this.total;
    }

    function openEmail(){
      var subject = "JNAH Order Confirmation"
      var formattedBody = "Hi, \n\n"
                + "Here is the confirmation of your order: "
                + "\n Item: \t" + this.productData.name
                + "\n Quantity: " + this.productData.quantity
                + "\n Price: " + this.productData.price
                + "\n Total: " + this.total 
                + "\n\n Thank you for shopping with us! \n\n JNAH"
                ;
      var mailToLink = "mailto:" + email.value.trim() + "?subject=" + encodeURIComponent(subject)  +"&body=" + encodeURIComponent(formattedBody);
      window.location.href = mailToLink;
    }
    
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
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
      openEmail();      
    });

    function checkInputs(){
      const firstNameValue = firstName.value.trim();
      const lastNameValue = lastName.value.trim();
      const phoneValue = phone.value.trim();
      const emailValue = email.value.trim();
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
      else if(phoneValue.length != 10){
        setErrorFor(phone, 'Must be 10 numbers')
      }
      
      else{
        setSuccessFor(phone);
      }
      
      //EMAIL
      var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(emailValue === ''){
        setErrorFor(email, 'Email is required');
      } 
      else if(!emailRegEx.test(String(emailValue).toLowerCase())){        
        setErrorFor(email, 'Email is invalid.')
      }      
      else{
        setSuccessFor(email);
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
        setErrorFor(cvv, 'Must be 3 digits')
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


    
    
    
