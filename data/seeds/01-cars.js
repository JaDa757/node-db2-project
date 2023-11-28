const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 21500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2222222222222',
        make: 'toyota',
        model: 'corolla',
        mileage: 1500,
        title: 'salvage',

    },
    {
        vin: '3333333333333',
        make: 'toyota',
        model: '4Runner',
        mileage: 100000,
    },
    {
        vin: '4444444444444',
        make: 'ford',
        model: 'focus',
        mileage: 2150,
    },

]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}