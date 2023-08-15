// const fs = require('fs')
// const path = require('path')
// //create folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err) {
//     if(err) throw err;
//     console.log('folder created....')
// });
//--------------------------------------------------------------------------------
// const fs = require('fs')
// const path = require('path')
// //create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!',err =>{
//     if(err) throw err;
//     console.log('file written to...')
// })//Append file

// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I Love node js',function(err){
//     if(err) throw err;
//     console.log('file written to...')
    
    
// })
// const fs = require('fs')
// const path = require('path')
// // read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) =>{
//     if(err) throw err;
//     console.log(data)
// })
const fs = require('fs')
const path = require('path')
// rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(err) =>{
    if(err) throw err;
    console.log('Renamed...')
})