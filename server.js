const express=require('express')
const port=3002
const app=express();
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
  res.send('hello world')
})

app.post('/info',(req,res)=>{
  try{
    const {Username,Email,Password,DateofBirth}=req.body
     if(!Username)
      return res.status(400).json({message:"Username cannot be enpty"})
    else if(!Email)
      return res.status(400).json({message:"Email cannot be empty"})
    const len=Password.length
    if(len>8 || len<=16)
      return res.status(200).json({message:"It is in the length"})
    else
      return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
  }
  catch(e){
    console.log(e.message)
  }
})

app.listen(port,()=>{
  console.log(`server connected sucessfully to ${port}`)
})