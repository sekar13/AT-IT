const EventEmitter = require('events')
const uuid = require('uuid')
// console.log(uuid.v4())
class Logger extends EventEmitter{
    log1(msg){
        //call Event
        this.emit('message',{id:uuid.v4(),msg});
    }
}
module.exports=Logger