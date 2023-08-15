const express = require ('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.delete('/post/:id',(req,res)=>{
    res.json({
       msg:`post ${req.params.id} deleted`
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log(`Sever started on port ${PORT} `))