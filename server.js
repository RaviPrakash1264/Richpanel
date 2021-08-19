const PORT = process.env.PORT || 5006 ;
const express =require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(PORT,()=>{
    console.log('Listening');
})