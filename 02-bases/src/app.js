

// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');

const {getUserByid} = require('./js-foundation/03-callbacks');

const id = 1;

getUserByid(id, function(error, user) {
    if(error) {
        throw new Error(error);
    }

    console.log({user});
    
});