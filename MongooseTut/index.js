// getting started 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kunal', {useNewUrlParser: true, useUnifiedTopology: true});


// we are connecting
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Hurrah! we are connected ")
});

// Schema in mongoose
const kittySchema = new mongoose.Schema({
    name: String
  });

//   speak functionality to our document
kittySchema.methods.speak = function () {
    const greeting =  "my name is " + this.name
    console.log(greeting);
  }

//   compiling schema to model
const Kitten = mongoose.model('Kitten', kittySchema);

// creating kitten document
const kunalkitty = new Kitten({ name: 'kunalkitty' });
// console.log(kunalkitty.name);
// kunalkitty.speak();

// saving to mongodb
kunalkitty.save(function (err, kunalkitty) {
    if (err) return console.error(err);
    kunalkitty.speak();
  });
