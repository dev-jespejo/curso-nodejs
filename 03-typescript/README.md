# Instalación de Node.js con TypeScript

Este documento describe cómo configurar un proyecto de Node.js con soporte para TypeScript paso a paso. El proceso está basado en la guía proporcionada por [Klerith](https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01).

---

## **Requisitos previos**
1. Tener instalado Node.js en tu sistema. Puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).
2. Un editor de texto como [Visual Studio Code](https://code.visualstudio.com/).

---

## **Pasos para la configuración**

### 1. Inicializar un proyecto de Node.js

1. Crea una carpeta para tu proyecto y accede a ella:
   ```bash
   mkdir mi-proyecto
   cd mi-proyecto
   ```
2. Inicializa un proyecto de Node.js:
   ```bash
   npm init -y
   ```
   Esto creará un archivo `package.json` con la configuración predeterminada.

---

### 2. Instalar TypeScript y configurarlo

1. Instala TypeScript como una dependencia de desarrollo:
   ```bash
   npm install typescript --save-dev
   ```

2. Crea el archivo de configuración de TypeScript (`tsconfig.json`):
   ```bash
   npx tsc --init
   ```

3. Ajusta las configuraciones del archivo `tsconfig.json` según sea necesario. Un ejemplo básico:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "rootDir": "src",
       "outDir": "dist",
       "strict": true
     }
   }
   ```

---

### 3. Configurar la estructura del proyecto

1. Crea una carpeta `src/` donde colocarás el código fuente:
   ```bash
   mkdir src
   ```
2. Agrega un archivo inicial `index.ts` dentro de la carpeta `src`:
   ```bash
   echo "console.log('Hola, TypeScript con Node.js!');" > src/index.ts
   ```

---

### 4. Compilar y ejecutar el código

1. Compila el código TypeScript:
   ```bash
   npx tsc
   ```
   Esto generará una carpeta `dist/` con los archivos JavaScript compilados.

2. Ejecuta el archivo compilado:
   ```bash
   node dist/index.js
   ```

---

### 5. Agregar soporte para Nodemon y TypeScript
Para una mejor experiencia de desarrollo, puedes usar `nodemon` para reiniciar automáticamente el servidor al hacer cambios en el código.

1. Instala `nodemon` y `ts-node` como dependencias de desarrollo:
   ```bash
   npm install ts-node nodemon --save-dev
   ```

2. Crea un archivo de configuración para `nodemon`:
   ```bash
   echo '{"watch": ["src"], "ext": "ts", "exec": "ts-node ./src/index.ts"}' > nodemon.json
   ```

3. Actualiza el `package.json` para agregar un script:
   ```json
   "scripts": {
     "dev": "nodemon"
   }
   ```

4. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

---

### 6. (Opcional) Instalar ESLint y Prettier
Para mantener un código limpio y consistente, puedes configurar ESLint y Prettier:

1. Instala ESLint y Prettier:
   ```bash
   npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
   ```

2. Configura ESLint:
   ```bash
   npx eslint --init
   ```

3. Agrega un archivo `.prettierrc` con la configuración deseada:
   ```json
   {
     "semi": true,
     "singleQuote": true
   }
   ```

---

## **Referencias**
- [Guía original en Gist por Klerith](https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01)

