import fs from 'fs';
import { yarg } from './plugins/yargs.plugin';


let {b:base, l:limit, s:showTable} = yarg;

let outputMessage = '';
const headerMessage = `
=======================================
            Tabla del ${base}
=======================================\n            
`;

for(let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base*i}\n`;
}

outputMessage = headerMessage + outputMessage;


const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

if(showTable){
    console.log(outputMessage);
}

console.log('File Created');