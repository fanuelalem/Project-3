const router = require('express').Router();
const { getUploads } = require('../../../controllers/uploadController');

router.route('/')
  .get(getUploads);

module.exports = router;