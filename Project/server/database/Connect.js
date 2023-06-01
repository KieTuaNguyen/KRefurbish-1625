const mongoose = require('mongoose');

const DB = "mongodb+srv://kiet:krefurbishByKieTuanguyen@cluster0.hjig7t6.mongodb.net/krefurbish?retryWrites=true&w=majority"


mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connection successful!');
}).catch(err => {
  console.log(err);
});