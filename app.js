//1. Set up express
const express = require('express');
const cookieParser = require('cookie-parser');
//require body-parser
const app = express();

//2. Set up  uses
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cookieParser())
//app.use(bodyParser.urlencoded(extended:true))

//3. Set up templating engine
app.set("view engine", "pug");

app.get("/",(req,res)=>{
    res.render('form');
})

app.post("/",(req, res)=>{
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const age = Number(req.body.age);
    let bmi = (weight/(height/100)**2).toFixed(1); //parseFloat
    res.render('form',{height, weight, age, result:`Your BMI Result is: ${bmi}`})

})

//4. Set up port
app.listen(3000,()=>{
    console.log("Running on port 3000");
})
