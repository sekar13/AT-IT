const express = require('express')
const router = express()
const members = require('../../Members1')
// const uuid = require('uuid')
//Get all members
router.get("/" ,(req,res)=>{
    res.json(members)
    

})
//Get single members
router.get("/:id", (req,res)=>{
    //res.send(req.params.id) //---this will teurn the number which given in id
    //res.json(members.filter(members=> members.id === parseInt(req.params.id)))
    const found=members.some(members=> members.id ===parseInt(req.params.id))
    if(found){
        res.json(members.filter(members=> members.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:'Member no found'})
    }
})
//Create members
router.post('/',(req,res)=>{
    //res.send(req.body)//-----trial
    const newMembers = {
        id : 5,
        JerseyNo:99,
        name: req.body.name,
        strong: req.body.strong,
        status: 'Active'
    }
    if(!newMembers.name || !newMembers.strong){
        res.status(400).json({msg: `Please include name and strong`})
    }
    members.push(newMembers)
    res.json(members)
})
//update member
router.put("/:id", (req,res)=>{
    //res.send(req.params.id) //---this will teurn the number which given in id
    //res.json(members.filter(members=> members.id === parseInt(req.params.id)))
    const found=members.some(members=> members.id ===parseInt(req.params.id))
    if(found){
        const updMember = req.body;
        members.forEach(members=>{
            if(members.id===parseInt(req.params.id)){
                members.name = updMember.name? updMember.name: members.name
                members.email = updMember.email? updMember.email: members.email
                res.json({msg: 'Member updated',members})
            }
        })
    }
    else{
        res.status(400).json({msg:'Member no found'})
    }
})
router.delete("/:id", (req,res)=>{
    //res.send(req.params.id) //---this will teurn the number which given in id
    //res.json(members.filter(members=> members.id === parseInt(req.params.id)))
    const found=members.some(members=> members.id ===parseInt(req.params.id))
    if(found){
        res.json({msg:"Msg deleted",
            members:members.filter(members=> members.id === parseInt(req.params.id))})
    }
    else{
        res.status(400).json({msg:'Member no found'})
    }
})


module.exports = router;
