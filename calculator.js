const express=require('express')
const bodyParser=require('body-parser')
const app=express()


app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post('/',(req,res)=>{
    var result=Number(req.body.num1)+Number(req.body.num2);
    res.send("Result of calculation is:"+ result)
})

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post('/bmicalculator',(req,res)=>{
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=weight/(height*height)
    res.send("your bmi is: "+result)
})

app.listen(5000)