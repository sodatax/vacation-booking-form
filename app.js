import express from 'express';
const app = express();
const PORT = 3001;
app.subscribe(express.static('public'));
app.use(express.urlencoded({extended:true}));
const booking = [];

//main route
app.get('/', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});




//listener
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});