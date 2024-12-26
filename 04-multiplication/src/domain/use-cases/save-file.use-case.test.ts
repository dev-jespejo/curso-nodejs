import fs from 'fs';
import { rimraf } from 'rimraf';
import { SaveFile } from './save-file.use-case';



describe('SaveFileUseCase', () => {

  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name',
  }

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });


  afterAll(() => {
    // Clean up after each test
    const customOutputsBaseDir = customOptions.fileDestination.split('/')[0];
    const outputsFolderExists = fs.existsSync('outputs');
    if (outputsFolderExists) {
      rimraf(`outputs`); // rimraf soluciona el problema de permisos para eliminar directorios
      // fs.rmSync(`outputs`, { recursive: true, force: true });
    }
 
    const customOutputsFolderExists = fs.existsSync(customOutputsBaseDir);
    if (customOutputsFolderExists) {
      rimraf(customOutputsBaseDir); // rimraf soluciona el problema de permisos para eliminar directorios
      // fs.rmSync(`${customOutputsBaseDir}`, {
      //   recursive: true,
      //   force: true,
      // });
    }
  });

  test('should save file with default values', () => {

    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content'
    }

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath); // ojo
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    
    expect( result ).toBe( true );
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( options.fileContent );
    

  });


  test('should save file with custom values', () => {

    const saveFile = new SaveFile();
    
    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });
    
    expect( result ).toBe( true );
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( customOptions.fileContent );

  });

  test('should return false if directory could not be created', () => {

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing'); }
    );
    
    const result = saveFile.execute(customOptions);

    expect( result ).toBe( false );

    mkdirSpy.mockRestore();

  });


  test('should return false if file could not be created', () => {

    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('This is a custom writing error message'); }
    );
    
    const result = saveFile.execute({ fileContent: 'Hola' });

    expect( result ).toBe( false );

    writeFileSpy.mockRestore();
  });



});