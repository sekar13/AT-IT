const FsLogger = require('/fs_fsloger_index')
const fsloger = new FsLogger()
fsloger.on('message',data=>console.log('called Listener',data))
fsloger.file("Hello world")
fsloger.file('Happy day')
fsloger.file('Super days')