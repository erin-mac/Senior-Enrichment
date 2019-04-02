const Sequelize = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_URL ||
    'postgres://localhost:5432/acme-users-rank', {
        logging: false
    }
);

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    rank: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = {
    db,
    User
}