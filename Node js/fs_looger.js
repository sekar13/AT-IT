const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
class FsLogger extends EventEmitter{
    file(msg){
        this.emit('Message',path.join(__dirname,'/New','hi.txt'))
    }
}
module.exports=FsLogger