const express =require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(5006,()=>{
    console.log('Listening to the server 5005');
})