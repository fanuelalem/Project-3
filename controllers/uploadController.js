const { Upload } = require('../models');

module.exports = {
  getUploads: async (req, res) => {
    try {
      const myUploads = await Upload.find();
      if (!myUploads) {
        return res.status(200).json({ error: 'No uploads found' });
      }
      return res.json(myUploads);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
