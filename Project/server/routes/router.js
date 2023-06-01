const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');

router.post('/survey', async (req, res) => {
  const { fullname, email, question01, question02, question03, question04, question05, question06, feedback } = req.body;
  if (!fullname || !email || !question01 || !question02 || !question03 || !question04 || !question05 || !question06 || !feedback) {
    return res.status(422).json("Please fill the field properly");
  }

  try {
    const preUser = await users.findOne({ email: email });
    console.log(preUser);

    if (preUser) {
      return res.status(422).json("There exists a user who submits the survey form with this email.");
    }
    else {
      const newUser = new users({
        fullname,
        email,
        question01,
        question02,
        question03,
        question04,
        question05,
        question06,
        feedback
      });

      await newUser.save();
      res.status(201).json("User submitted successfully.");
      console.log(newUser);

    }
  }
  catch (err) {
    res.status(422).send(err)
  }
});

router.get('/getData', async (req, res) => {
  try {
    const userData = await users.find();
    res.status(201).json(userData);
    console.log(userData);
  }
  catch (err) {
    res.status(422).send(err)
  }
});

router.get('/getUser/:id', async (req, res) => {
  try {
    console.log(req.params);
    const _id = req.params.id;

    const userData = await users.findById(_id);
    console.log(userData);
    res.status(201).json(userData);
  }
  catch (err) {
    res.status(422).json(err)
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,

    });
    console.log(updatedUser);
    res.status(201).json(updatedUser);
  }
  catch (err) {
    res.status(422).json(err)
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await users.findByIdAndDelete(id);
    console.log(deletedUser);
    res.status(201).json(deletedUser);
  }
  catch (err) {
    res.status(422).json(err)
  }
});

module.exports = router;