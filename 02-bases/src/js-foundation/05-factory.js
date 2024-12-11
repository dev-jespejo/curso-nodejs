
const buildPerson = ({name, birthdate}) => {
    
    return {
        id: new Date().getTime(),
        name,
        birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
    
}

const obj = {name: 'John', birthdate: '1986-02-14'};

const john = buildPerson(obj);

console.log(john);