const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb+srv://calebmumbi2:Hackerspremier!1997@cluster0.pdo5agn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    const email = 'defaultuser@gocal.com';
    const password = 'defaultpassword';

    const user = await User.findOne({ email });
    if (user) {
      console.log('Default user already exists');
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      console.log('Default user created');
    }
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
