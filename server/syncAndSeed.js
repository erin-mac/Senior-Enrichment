const { db, Students, Campuses } = require('./db')
const Sequelize = require('sequelize')

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => {
            return Promise.all([
                Campuses.create({ name: 'New York-flex', address: 'Hanover sq.', descript: 'part-time new york campus' }),
                Students.create({ firstName: 'Erin', lastName: 'M.', email: 'ermcaweeney@gmail.com', gpa: 4.0, campusId: 1 })
            ]);
        });
};

module.exports = syncAndSeed