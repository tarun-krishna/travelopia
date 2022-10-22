const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get All users data
router.get('/', async (req, res) => {
    try {
        const user = await User.find({}).lean().exec()
        return res.status(200).send({user : user})
    } catch (error) {
        return res.status(500).send({error : error})
    }
})

// post user data
router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        country:req.body.country,
        travellers:req.body.travellers,
        budget:req.body.budget
    });
user.save()
.then(data =>{
    res.json(data);
})
.catch(err =>{
    res.json({ message: err});
});
})


module.exports = router;