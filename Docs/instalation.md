Crear el proyecto
```
npx create-next-app@latest
```

Configuración
```
What is your project named? proyecto-pfg
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? No
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? No
```

Instalación prettier y eslint
```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

Configuración Eslint
- En el archivo .eslintrc.json
```
*  https://prettier.io/docs/en/integrating-with-linters.html
*
*  Parser -> como parsear el código
* 
*  rules -> reglas de ESLint
*/

{
  "extends": ["next/core-web-vitals", "airbnb", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "max-len": ["error", 140 ],
    "quotes": [2, "single", { "avoidEscape": true }]
  }
}
``` 

Instalación airbnb
```
npm i airbnb
```

Extensiones para visual
```
Prettier -> Formato
Barrels -> Unifica archivos en un index
ES7 + React/Readux/React-Native Snipets -> Estructura de funciones para React
JSON to TS -> Extrae la estructura de un JSON y la transforma en interfaces para typescript
Tailwind CSS -> estilos de Tailwind
TS-Node Playground -> Typescript
```
 
Iniciar el proyecto desde otro pc
```
npm install
```  