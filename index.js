const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')


 
//  const cors = require('cors');


const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
// Setup middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload())

app.use(cors())
// app.use(methodOverride('_method'))

 if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

 app.use("/",routes);
 
require('./services/passport');
// Connect database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userstockitem', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const MONGODB_URI = 'mongodb+srv://fanuel_alem:Classof2017@stormy-refuge.mt0nq.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/profile', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.on('connected', ()=>{
  console.log('mongoose is connected')
})

// Classof2017
 

app.listen(PORT,()=>{
  console.log(`listening on PORT ${PORT}`)
});
