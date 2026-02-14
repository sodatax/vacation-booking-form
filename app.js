import express from 'express';
const app = express();
const PORT = 3001;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//main route
app.get('/', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/submission.html`);
});

//listener
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});