import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Rota GET /product"})
})
router.post('/', (req, res) => {
  res.json({message: "Rota POST /product"})
})
router.put('/', (req, res) => {
  res.json({message: "Rota PUT /product"})
})
router.patch('/', (req, res) => {
  res.json({message: "Rota PATCH /product"})
})
router.delete('/', (req, res) => {
  res.json({message: "Rota DELETE /product"})
})

export default router