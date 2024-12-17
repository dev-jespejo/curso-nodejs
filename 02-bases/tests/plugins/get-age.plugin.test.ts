import { getAge } from "../../src/plugins";


describe('plugins/get-age.plugin.ts', () => {
  
    test('getAge() should return the age of a person', () => {
        
        const birthdate = '1986-02-14';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');

    });

    test('getAge should return current age', () => {
        const birthdate = '1986-02-14';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);

    }); 
    
    test('getAge should return 0 years', () => {
        
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1996);
        
        const birthdate = '1986-02-14';
        const age = getAge(birthdate);

        expect(age).toBe(0);   
        
        expect(spy).toHaveBeenCalled();
        
        jest.restoreAllMocks();
    });

    test('should return the correct age when the birthday has passed this year', () => {
        // Mock de Date.now() para retornar una fecha específica en milisegundos
        const fixedDate = new Date('2024-06-15').getTime();
        jest.spyOn(global.Date, 'now').mockImplementation(() => fixedDate);
    
        const birthdate = '2000-01-15';
        const age = getAge(birthdate);
    
   
        expect(age).toBe(24);
    
        // Limpia el mock
        jest.restoreAllMocks();
    });
    
    
    


});

