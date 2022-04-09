console.log("hello world console");


//need to add event listener to search bar so that event happens when button is clicked.

const submitBtnAPI=document.getElementById("apiBtn"); 

// const eventlistener=async()=> {

//     const response = await fetch(`https://amazon-price1.p.rapidapi.com/search?keywords=collar&marketplace=US`, {
//         method: 'GET',
//         body: JSON.stringify({ content }),
//         headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Host': 'amazon-price1.p.rapidapi.com', 
//             'X-RapidAPI-Key': '14de605de7msh97ddb17e777614dp14d459jsn4613eeb38e45'
//         },
//     });
//     if (response.ok) {
//         console.log(response)
//     } else {
//         alert('Failed create comment, please try again');
//     }
    
// };

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': 'ed2b9a585cmsh158347f027e94c7p1a5927jsndaa25907abde'
	}
};

fetch('https://amazon24.p.rapidapi.com/api/product?categoryID=pets&keyword=collar&country=US&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// submitBtnAPI.addEventListener("click", eventlistener)



addEventListener