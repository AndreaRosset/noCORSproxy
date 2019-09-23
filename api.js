const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/require', (req, res) => {
	if( req.request !== undefined){
        return fetch(req.request) 
        .then(response => {
            return response.json()
        })
        .then(res_body => { 
            res.header('Access-Control-Allow-Origin', '127.0.0.1')
            res.json(res_body)
        })
    }
    else{
        res.se
        res.json("Error in the parameters.")
    }
})

app.listen(PORT, () => console.log('Server ready on port'+ PORT))
