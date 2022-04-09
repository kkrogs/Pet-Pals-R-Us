var submitPet = document.querySelector('#add-pet');

const petFormHandler = async (event) => {
    event.preventDefault();
  //match pet form values
    const name = document.querySelector('#pet-title').value.trim();
    const type = document.querySelector('#type-title').value.trim(); //email, type
    const tag = document.querySelector('#tag-title').value.trim(); //password, tag
    const notes = document.querySelector('#notes-title').value.trim(); //password, notes
    const owner = document.querySelector('#owner-title').value.trim(); //password, owner
  //Fetch api/pets and stringify the values that matches the API pets route in the back that will create a new one in the DB
    if (name && type) {
      alert("testing")
      const response = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify({ name, type }),
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

// testBtn(); //don't think it's needed to call this anymore as no function is named testbtn

// submitPet.addEventlistener("click",function() {
//     alert("I am an alert box!");
    
//     });

