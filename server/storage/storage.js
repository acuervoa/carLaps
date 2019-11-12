const fs = require('fs')
const util = require('util')


let carLaps = [];

const create = (lap) => {

    let carLap = {
        time: Number(lap),
        when: Date.now()
    }

    if (!carLap.time) {
        throw new Error(`The parameter lap: ${lap} needs to be a number`);
    }

    loadDB();

    carLaps.push(carLap);

    saveDB();

    return carLaps;
}

const saveDB = () => {

    let data = JSON.stringify(carLaps);

    fs.writeFile(__dirname + "/db/data.json", data, (err) => {
        if (err) {
            console.error(err);
            throw new Error(`Error saving data: ${err}`);
        }

        console.log(`Data saved correctly`);
    });

    return carLaps;
}

const loadDB = () => {

    try {
        carLaps = require(__dirname + '/db/data.json');
    } catch (error) {
        carLaps = [];
    }

    return carLaps;
}

const getAll = () => {

    loadDB();
    return carLaps;
}

const deleteAll = () => {

    carLaps = [];

    saveDB()

    return {
        message: `All laps are deleted`
    }
}


const getLastLaps = (number) => {

    loadDB();
    let carLapsOrdered = carLaps.sort((a, b) => {
        return (b.when - a.when)
    }).slice(0, number)

    let newValue = (carLapsOrdered.forEach((car) => {
        let mls = new Date(car.time)
        car.converted = util.format('%d:%s.%s', mls.getMinutes(), ('0' + mls.getSeconds()).slice(-2), ('000' + mls.getMilliseconds()).slice(-3))
    }))

    return carLapsOrdered


}

const getBestLaps = (number) => {

    loadDB()

    let carLapsOrdered = carLaps.sort((a, b) => {
        return (a.time - b.time)
    }).slice(0, number)


    let newValue = (carLapsOrdered.forEach((car) => {
        let mls = new Date(car.time)
        car.converted = util.format('%d:%s.%s', mls.getMinutes(), ('0' + mls.getSeconds()).slice(-2), ('000' + mls.getMilliseconds()).slice(-3))
    }))

    return carLapsOrdered

}

module.exports = {
    create,
    getAll,
    deleteAll,
    getLastLaps,
    getBestLaps
}