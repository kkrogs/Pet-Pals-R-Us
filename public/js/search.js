console.log("hello world console");


//need to add event listener to search bar so that event happens when button is clicked.

function apiRender(event) {
event.preventDefault();
	const searchTerm = document.getElementById("search-term").value;
	alert(searchTerm)

	console.log("line 36")
	fetch(`/api/search?searchTerm=${searchTerm}`)
		.then(response => response.json())
		.then(data => { 
			console.log(data);
			document.getElementById("h2Txt").textContent = data[0].title; })
		.catch(err => console.error(err));

};


// function callApi() {
const submitBtnAPI = document.getElementById("apiBtn")	
submitBtnAPI.addEventListener("click", apiRender)

