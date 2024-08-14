import express from 'express'
import listProducts from '../controllers/product/listProducts.js'
import createProduct from '../controllers/product/createProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import editPhotoProduct from '../controllers/product/editPhotoProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'

const router = express.Router()

router.get('/', listProducts)
router.post('/', createProduct)
router.put('/', editProduct)
router.patch('/', editPhotoProduct)
router.delete('/', deleteProduct)

export default router