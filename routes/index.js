//endpoints

const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

//endpoint to handle employees data retrieval
router.get('/enrollment_bills', userController.getAllUsers);
router.post('/enrollment_bills',userController.createUser);
router.delete('/enrollment_bills',userController.deleteUser);

module.exports = router;
