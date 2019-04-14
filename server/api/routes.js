const { Students, Campuses } = require('../db')
const router = require('express').Router()

router.get('/students', async (req, res, next) => {
    try {
        const students = await Students.findAll()
        res.json(students)
    } catch (error) { next(error) }
})

router.get('/campuses', async (req, res, next) => {
    try {
        const campuses = await Campuses.findAll()
        res.json(campuses)
    } catch (error) { next(error) }
})

// router.put('/students/addStudent', async (req, res, next) => {
//     try {
//         const addStudent = await Students.create(req.body)
//         res.json(addStudent)
//     } catch (error) { next(error) }
// })

router.put('/campuses/addCampuses', async (req, res, next) => {
    try {
        const addCampus = await Campuses.create(req.body)
        res.json(addCampus)
    } catch (error) { next(error) }
})

router.use((req, res, next) => {
    res.status(404).send('Not found');
});


module.exports = router