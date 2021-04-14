const { User, Stock, Image } = require('../models/index');
  
module.exports = {
  addStock: async (req, res) => {
    const { text } = req.body;
    console.log(req.body,'text??')
    if (!text) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newStock = await new Stock({ text, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myStocks.push(newStock);
      await req.user.save();
      return res.status(200).json(newStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  
//  addUpload: async (req, res) => {
//     const { name } = req.body;
//     console.log(req.body,'this req.body')
    
//     try {
//       const newUpload = await new Upload({ name,type, user: req.user._id }).save();
//   console.log(newUpload,'sdsc')
  
//       // const newStock = await Stock.create({ text, user: req.user._id });
//       req.user.myUploads.push(newUpload);
//       await req.user.save();
//       return res.status(200).json(newUpload);
//     } catch (e) {
//       return res.status(403).json({ e });
//     }
//   }
  
  getUserByEmail: async (req,res)=>{
    try{
      const users = await User.find();
      if(!users){
        return res.status(404).json({error:'no user found'});
      }
      return res.status(200).json(users);
    }
    catch(e){
      return res.status(403).json({e})
    }
  },

  postMyImages: async (req, res) => {
    const { fileName,filePath } = req.body;
    console.log(req.files,'req files data postMyImages')

    if(req.files === null) {
      return res.status(400).json({msf:'no file uploaded'})
    }

    try {
      const file = req.files.file

      file.mv(`${__dirname}/../client/public/images/${file.name}`,async (err)=>{
        if(err){
          console.error(err)
          return res.status(500).send(err)
        }
        
        const newImage = await new Image({fileName:file.name,filePath:`/imagesddsds/${file.name}`, user: req.user._id}).save();
        req.user.myImages.push(newImage);
        await req.user.save();
        return res.status(200).json(newImage);

        // res.json({fileName:file.name,filePath:`./images/${file.name}`})
      })}catch (e) {
      return res.status(403).json({ e });
    }


      // const newImage = await new Image({ fileName, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      // req.user.myImages.push(newImage);
     
  },

  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // getAllUserEmails: async (req, res) => {
  //   try {
  //     const userEmail = await User.findOne({ email: req.query.email }, 'email');
  //     return res.status(200).json(userEmail);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
  getUserStocks: async (req, res) => {
    try {
      // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
      
      const stocks = await Stock.find({ user: req.user._id });
      return res.json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getMyImages: async (req, res) => {
    try {
      const images = await Image.find({ user: req.user._id });
      console.log("this i the getImages", req , res, images)
      return res.json(images);
    } catch (e) {
      return res.status(403).json({ e });
    }
    // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
  },


  deleteUserStockById: async (req, res) => {
    // grab stockId from req.params
    const { stockId } = req.params;
    try {
      // First find the todo by Id
      const stockToDelete = await Stock.findById(stockId);
      if (!stockToDelete) {
        return res.status(401).json({ error: 'No todo with that Id' });
      }
      // console.log('current logged in users id', req.user._id)
      // console.log('id of the user that the todo belongs to', stockToDelete.user)
      // return res.status(200).json('hello')
      // Check if the todo does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      if (req.user._id.toString() !== stockToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      //  otherwise, delete the todo
      const deletedStock = await Stock.findByIdAndDelete(stockId);
      // Respond back with the deleted todo
      return res.json(deletedStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
   getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateStockById: async (req, res) => {
    //   Grab stockId from params
      const { stockId } = req.params;
      //  grab text and completed from the database
      const { text, completed } = req.body;
      // if(!text){
      //   return res.status(400).json({error:'you must provide a text'})
      // }
  
      try {
        const stockToUpdate = await Stock.findById(stockId);
        if (!stockToUpdate) {
          return res.status(404).json({ error: 'No todo with that Id'});
        }
        if (req.user._id.toString() !== stockToUpdate.user.toString()) {
          return res.status(401).json({ error: "You cannot update a todo that's not yours" });
        }
        const updatedStock = await Stock.findByIdAndUpdate(stockId,
          { completed, text },
          { new: true });
        return res.json(updatedStock);
      } catch (e) {
        return res.status(403).json({ e });
      }
    },
};



 


//  const {file}=req.file
    //  console.log(req.file,'image info')
    //  const {file}=req.file
    //  const {data} = req.file
    //  console.log(req.body)
     // if (!fileName) {
    //   return res.status(400).json({ error: 'You must provide name' });
    // }
    // try {
    //   const newImage = await new Image({ data, user: req.user._id }).save();
    //   // const newStock = await Stock.create({ text, user: req.user._id });
    //   req.user.myImages.push(newImage);
    //   await req.user.save();
    //   return res.status(200).json({newImage});
    // } catch (e) {
    //   return res.status(403).json({ e });
    // }