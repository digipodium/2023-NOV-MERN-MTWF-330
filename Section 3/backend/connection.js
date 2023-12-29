const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mern330nov?retryWrites=true&w=majority";

// asynchronous
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.error(err);
});