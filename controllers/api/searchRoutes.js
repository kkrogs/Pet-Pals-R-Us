const router = require('express').Router();
const axios = require('axios').default;

router.get('/', async (req, res) => {
    console.log("SearchRoutes")
    try {
      //this is where I am going to add axios call to the rapid API as an async await call and do what I did with the fetch below
      var options = {
        method: 'GET',
        url: 'https://amazon-price1.p.rapidapi.com/search',
        params: {keywords: req.query.searchTerm, marketplace: 'US'},
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'amazon-price1.p.rapidapi.com',
          'X-RapidAPI-Key': '14de605de7msh97ddb17e777614dp14d459jsn4613eeb38e45'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        console.log("searchTerm", req.query.searchTerm)
        res.status(200).json(response.data)
      }).catch(function (error) {
        console.error(error);
        throw(error)
      });

     
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;

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
	//need to move this back to the server and get a search route. I will fetch /api/search and then pass the search term back with it as either a query parameter.
	//Need to move the query parameters back to the server

	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
	// 		'X-RapidAPI-Key': 'ed2b9a585cmsh158347f027e94c7p1a5927jsndaa25907abde'
	// 	}
	// };
	// console.log("line 36")
	// fetch(`https://amazon24.p.rapidapi.com/api/product?categoryID=pets&keyword=${searchTerm}&country=US&page=1`, options)
	// 	.then(response => response.json())
	// 	.then(response => { document.querySelector(".h2Txt").innerHTML = response.docs[0].app_sale_price; console.log(response); })
	// 	.catch(err => console.error(err));
