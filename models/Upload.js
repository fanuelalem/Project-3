const { Schema, model } = require('mongoose');

const UploadScema = new Schema({
  name: {
    type: String,
   },
  type: {
    type: String,
   },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Upload = model('Upload', UploadScema);

module.exports = Upload;