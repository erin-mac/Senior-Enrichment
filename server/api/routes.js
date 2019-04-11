const { Manager, Product } = require('../db')
const router = require('express').Router()

router.get('/managers', async (req, res, next) => {
    try {
        const managers = await Manager.findAll()
        res.json(managers)
    } catch (error) { next(error) }
})

router.get('/products', async (req, res, next) => {
    try {
        const users = await Product.findAll()
        res.json(users)
    } catch (error) { next(error) }
})

router.use((req, res, next) => {
    res.status(404).send('Not found');
});

router.put('/products/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id)
        product.update({ managerId: req.body.id })
        return await product.save()
    } catch (error) { next(error) }
})

module.exports = router