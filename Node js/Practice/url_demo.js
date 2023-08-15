const url = require('url')
const myurl = new URL('http:/mywebsite.com/hello.html?id=100&status=active')
//serialized URL----get the straight up url 
console.log(myurl.href)
console.log(myurl.toString())
//Host(root domain)
console.log(myurl.host)
//HostName(dosen't include port)
console.log(myurl.hostname)
//pathname---just gives actual path
console.log(myurl.pathname)
//serialized query --basically everything after the (?)
console.log(myurl.search)
//params object---we get an actually object with id and value and the status and the value
console.log(myurl.searchParams)
//Add param
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams)
//loop through params
myurl.searchParams.forEach((value,name)=> console.log(`${value}: ${name}`))

