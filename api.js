const express = require('express')
const fetch = require('node-fetch')
const app = express()
const PORT = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  next();

});

app.get('/require', (req, res) => {
	if( req.query.site !== undefined){
        return fetch(req.query.site) 
        .then(response => {
            return response.json()
        })
        .then(res_body => { 
            res.json(res_body)
        })
    }
    else{
        res.json("req.site: Error")
    }
})

app.listen(PORT, () => console.log('Server ready on port'+ PORT))
