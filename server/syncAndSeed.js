const { db, User } = require('./db')
const Sequelize = require('sequelize')

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => {
            return Promise.all([
                User.create({ name: 'Moe', description: 'The greatest', rank: 1 }),
                User.create({ name: 'Larry', description: 'Pretty good', rank: 2 }),
                User.create({ name: 'Curly', description: 'Just OK', rank: 3 }),
            ]);
        });
};

module.exports = syncAndSeed