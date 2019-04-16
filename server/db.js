const Sequelize = require('sequelize');
const faker = require('faker')
const db = new Sequelize(
    process.env.DATABASE_URL ||
    'postgres://localhost:5432/senior-enrich', {
        logging: false
    }
);

const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'null'
    },
    address: {
        type: Sequelize.STRING,
        allowNullL: false,
        notEmpty: true
    },
    description: {
        type: Sequelize.TEXT
    }
});

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: false,
        isEmail: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: faker.image.people()
    },
    gpa: {
        type: Sequelize.FLOAT,
        defaultValue: (Math.random() * (4)).toFixed(2),
        validate: { min: 0.0, max: 4.0 }
    }
})

Students.belongsTo(Campuses)
Campuses.hasMany(Students, {
    foreignKey: {
        allowNull: true
    }
})

module.exports = {
    db,
    Students,
    Campuses
}