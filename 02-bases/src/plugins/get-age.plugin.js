// const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) return new Error('birthdate is required');

    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

module.exports = {
    getAge,
}