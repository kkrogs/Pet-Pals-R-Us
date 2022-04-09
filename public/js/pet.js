var submitPet = document.querySelector('#add-pet');

const petFormHandler = async (event) => {
    event.preventDefault();
  //match pet form values
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  //Fetch api/pets and stringify the values that matches the API pets route in the back that will create a new one in the DB
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
    // Stringify and set key in localStorage to initials array
  
  // anytime I get a click on the add the pet then it does the function that is the 2nd argument. In this case petFormHandler
  submitPet.addEventListener("click", petFormHandler);

testBtn();

// submitPet.addEventlistener("click",function() {
//     alert("I am an alert box!");
    
//     });

