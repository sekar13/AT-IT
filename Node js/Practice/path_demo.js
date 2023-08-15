const path = require('path')
//Base file name
console.log(path.basename(__filename));
//directory file
console.log(path.dirname(__filename));
///File extension
console.log(path.extname(__filename))
//create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)
//concatenate path
console.log(path.join(__dirname , 'hello.html','test'))