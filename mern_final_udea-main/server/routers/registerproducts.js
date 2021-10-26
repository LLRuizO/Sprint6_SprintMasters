const express = require("express");
const RegisterProductsController = require("../controllers/registerProducts");
const cors=require('./cors')

const api = express.Router();

api.route("/register-products")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,RegisterProductsController.getRegisterProducts)
.post(cors.corsWithOptions,RegisterProductsController.registerProducts);

api.route("/register-products/:productId")
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.put(cors.corsWithOptions,RegisterProductsController.updateRegisterProducts)
.delete(cors.corsWithOptions,RegisterProductsController.deleteRegisterProducts)

module.exports = api;