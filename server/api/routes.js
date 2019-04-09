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

module.exports = router