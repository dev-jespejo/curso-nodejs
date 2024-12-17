import { getUserByid } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts', () => {
  
    test('getUserByid should return an error if user does not exist', (done) => {
      
        const id = 10;

        getUserByid(id, (err, user) => {
            
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();

        });
        
    });

    test('getUserByid should return John Doe', (done) => {
      
        const id = 1;
         getUserByid(id, (err, user) => {
         
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
            });

            done();

        });   

    });
    
    

});
