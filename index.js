
const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000;


//cliente so tem acesso ao public
app.use(express.static('./public'))

// pedido em http://localhost:3000/
app.get('/',(req, res) => {
 res.sendFile(path.join(__dirname,'/public/views/index.html'))
})

app.listen(PORT, function(){
    console.log('Server is running on PORT:'  + PORT);
 });