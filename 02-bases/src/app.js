const {getAge, getUUID} = require('./plugins');


const {buildMakePerson} = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getAge, getUUID});

const obj = {name: 'John', birthdate: '1986-02-14'};

const johnDoe = makePerson(obj);

console.log({johnDoe});
