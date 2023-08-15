const http = require('http')

//create server object
http.createServer((req,res)=>{
    //Write response
    res.write("Gud Mrng every one")
    res.end()   
})
.listen(3000,()=> console.log("server loading...."))