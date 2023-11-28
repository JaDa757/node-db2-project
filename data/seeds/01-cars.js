const cars = [
    {
        vin: '1111111',
        make: 'toyota',
        model: 'prius',
        milage: 21500,
        title: 'clean',
        transmisson: 'manual'
    },
    {
        vin: '1111111',
        make: 'toyota',
        model: 'corolla',
        milage: 1500,
        title: 'salvage',

    },
    {
        vin: '1111111',
        make: 'toyota',
        model: '4Runner',
        milage: 100000,
    },
    {
        vin: '1111111',
        make: 'ford',
        model: 'focus',
        milage: 2150,
    },

]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}