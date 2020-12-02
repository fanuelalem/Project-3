const router = require('express').Router();
const todoRoutes = require('./stockRoutes');
const uploadRoutes = require('./uploadRoutes');

const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userRoutes');
 
router.use('/stock', todoRoutes);

router.use('/upload', uploadRoutes);

 
router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);

module.exports = router;
