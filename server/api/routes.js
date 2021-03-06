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

router.put('/students/addStudents', async (req, res, next) => {
    try {
        const addStudent = await Students.create(req.body)
        res.json(addStudent)
    } catch (error) { next(error) }
})

router.put('/campuses/addCampuses', async (req, res, next) => {
    try {
        const addCampus = await Campuses.create(req.body)
        res.json(addCampus)
    } catch (error) { next(error) }
})

router.delete('/campuses/deleteCampus', async (req, res, next) => {
    try {
        const deleteCampus = await Campuses.destroy({
            where: {
                id: req.body.id
            }
        })
        res.sendStatus(204)
    } catch (error) { console.log(error) }
})

router.delete('/students/deleteStudent', async (req, res, next) => {
    try {
        const deleteStudent = await Students.destroy({
            where: {
                id: req.body.id
            }
        })
        res.sendStatus(204)
    } catch (error) { console.log(error) }
})

router.use((req, res, next) => {
    res.status(404).send('Not found');
});


module.exports = router