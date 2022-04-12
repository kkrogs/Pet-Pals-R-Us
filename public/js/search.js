console.log("hello world console");


//need to add event listener to search bar so that event happens when button is clicked.

function apiRender(event) {
event.preventDefault();
	const searchTerm = document.getElementById("search-term").value;
	alert(searchTerm)
	//this line renders Amazon API data to the page. The = data[0].title shows the title of the item searched.
	console.log("line 36")
	fetch(`/api/search?searchTerm=${searchTerm}`)
		.then(response => response.json())
		.then(data => { 
			console.log(data);
			document.getElementById("productImg").src = data[0].imageUrl;
			document.getElementById("h2Txt").textContent = data[0].title; 
			document.getElementById("price").textContent = data[0].price;
			document.getElementById("rating").textContent = data[0].rating;	
			document.getElementById("productIdentifier").textContent = data[0].ASIN;
			document.getElementById("linkA").textContent = data[0].detailPageURL;


		})

		.catch(err => console.error(err));

};


// function callApi() {
const submitBtnAPI = document.getElementById("apiBtn")	
submitBtnAPI.addEventListener("click", apiRender)

