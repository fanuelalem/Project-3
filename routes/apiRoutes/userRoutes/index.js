const router = require('express').Router();
const {
  getUserStocks,
  deleteUserStockById,
  updateStockById,
  getAllUserEmails,
  addStock,
  getUserUploads,
  addUpload
} = require('./../../../controllers/userController');

const { getCurrentUser, getFilteredUsers } = require('./../../../controllers/profileController');


const { requireAuth } = require('./../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);

router.route('/profile')
  .get(requireAuth, getCurrentUser);

  

router.route('/profiles')
  .get(requireAuth, getFilteredUsers);
 
// /api/user/stock
router.route('/stock')
  .get(requireAuth, getUserStocks)
  .post(requireAuth, addStock);

  // /api/user/upload

  router.route('/upload')
  .get(getUserUploads)
  .post(addUpload);

// /api/user/emails

// /api/user/stock/:todoID
router.route('/stock/:stockId')
  .delete(requireAuth, deleteUserStockById)
  .put(requireAuth, updateStockById);

module.exports = router;
