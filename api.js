const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  next();

});

app.get('/require', (req, res) => {
	if( req.request !== undefined){
        return fetch(req.request) 
        .then(response => {
            return response.json()
        })
        .then(res_body => { 
            res.json(res_body)
        })
    }
    else{
        res.se
        res.json("Error in the parameters.")
    }
})

app.listen(PORT, () => console.log('Server ready on port'+ PORT))
