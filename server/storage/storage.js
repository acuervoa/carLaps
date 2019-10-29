const fs = require('fs');

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

    saveDB();

    return {
        message: `All laps are deleted`
    }
}


const getLastLaps = (number) => {

    loadDB();
    return carLaps.sort((a, b) => {
        return (b.when - a.when)
    }).slice(0, number)
}

const getBestLaps = (number) => {

    loadDB();
    return carLaps.sort((a, b) => {
        return (a.time - b.time)
    }).slice(0, number)
}

module.exports = {
    create,
    getAll,
    deleteAll,
    getLastLaps,
    getBestLaps
}