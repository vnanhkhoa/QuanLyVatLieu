var express = require('express');

var adminController = require("../controllers/admin.controller");

var router = express.Router();

router.get("/", adminController.index)
router.get("/delete/:table/:id", adminController.delete)
router.get("/user", adminController.user)
router.post("/user/add", adminController.addUser)
router.post("/user/edit", adminController.editUser)
router.get("/staff", adminController.staff)
router.post("/staff/add", adminController.addStaff)
router.post("/staff/edit", adminController.editStaff)
router.get("/products", adminController.products)
router.post("/products/add", adminController.addProducts)
router.post("/products/edit", adminController.editProducts)
router.get("/suppliers", adminController.suppliers)
router.post("/suppliers/add", adminController.addSuppliers)
router.post("/suppliers/edit", adminController.editSuppliers)
router.get("/warehouse", adminController.warehouse)
router.post("/warehouse/add", adminController.addWarehouse)
router.post("/warehouse/edit", adminController.editWarehouse)

// router.get("/rooms/:id" , adminController.room_id)
// router.get("/book/:id" , adminController.bookingView)
// router.post("/create", adminController.creatUser)


module.exports = router;