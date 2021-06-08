const router = require('express').Router();
const {
  getUserStocks,
  deleteUserStockById,
  updateStockById,
  getAllUserEmails,
  addStock,
  getMyImages,
  postMyImages,
} = require('./../../../controllers/userController');

const {
  getCurrentUser,
  getFilteredUsers,
} = require('./../../../controllers/profileController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');

const multer = require('multer');

// /api/user/emails
router.get('/emails', getAllUserEmails);

router.route('/profile').get(requireAuth, getCurrentUser);

router.route('/profiles').get(requireAuth, getFilteredUsers);

// /api/user/stock
router
  .route('/stock')
  .get(requireAuth, getUserStocks)
  .post(requireAuth, addStock);

// /api/user/myimages

const upload = multer({ dest: '' });

router
  .route('/myimages')
  .get(requireAuth, getMyImages)
  .post(requireAuth, upload.single('file'), postMyImages);

// /api/user/emails

// /api/user/stock/:todoID
router
  .route('/stock/:stockId')
  .delete(requireAuth, deleteUserStockById)
  .put(requireAuth, updateStockById);

module.exports = router;
