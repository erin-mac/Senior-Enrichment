const { User } = require('../db')
const router = require('express').Router()

router.get('/users', async (req, res, next) => {
    try {
        console.log('here!')
        const users = await User.findAll()
        res.json(users)
    } catch (error) { next(error) }
})

router.use((req, res, next) => {
    res.status(404).send('Not found');
});

module.exports = router