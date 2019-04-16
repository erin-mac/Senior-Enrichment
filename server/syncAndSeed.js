const { db, Students, Campuses } = require('./db')
const Sequelize = require('sequelize')
const faker = require('faker')

const generateGPA = () => {
    const GPA = (Math.random() * (4)).toFixed(2)
    return GPA
}

const assignCampus = () => {
    const campusId = Math.ceil(Math.random() * 6)
    return campusId
}

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => {
            return Promise.all([
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() }),
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() }),
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() }),
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() }),
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() }),
                Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraph(), imageUrl: faker.image.business() })
            ])
        })
        .then(() => {
            return Promise.all([
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
                Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: generateGPA(), campusId: assignCampus(), imageUrl: faker.image.people() }),
            ])
        })
};

module.exports = syncAndSeed