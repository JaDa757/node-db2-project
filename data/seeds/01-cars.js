const cars = [
    {
        vin: '1GCEC14H4DF123456',
        make: 'toyota',
        model: 'prius',
        mileage: 21500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'JHMGE8H30Xs123456',
        make: 'toyota',
        model: 'corolla',
        mileage: 1500,
        title: 'salvage',

    },
    {
        vin: '5YJ3E1EAXJF001234',
        make: 'toyota',
        model: '4Runner',
        mileage: 100000,
    },
    {
        vin: 'WBA3B5G57FNS12345',
        make: 'ford',
        model: 'focus',
        mileage: 2150,
    },

]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}