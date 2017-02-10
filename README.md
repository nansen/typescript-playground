# typescript-playground
A setup for the upcoming TS workshop


Reading material (these will help, but if you don't have time, this will be explained during workshop):
- Configuration - https://www.typescriptlang.org/docs/handbook/tsconfig-json.html ("Overview", "Using tsconfig.json")
- Variable declarations - https://www.typescriptlang.org/docs/handbook/variable-declarations.html ("Var", "Let")
- Basic types - https://www.typescriptlang.org/docs/handbook/basic-types.html ("Boolean", "Number", "String", "Array", "Enum", "Any", "Void")
- Modules - https://www.typescriptlang.org/docs/handbook/modules.html ("Export", "Import")
- Interfaces - https://www.typescriptlang.org/docs/handbook/interfaces.html ("Our First Interface", "Optional Properties")
- Classes - http://www.typescriptlang.org/docs/handbook/classes.html ("Classes", "Inheritance", "Public, private, and protected modifiers")
- Generics - https://www.typescriptlang.org/docs/handbook/generics.html ("Hello World of Generics")

Prequisites:
- git - https://git-scm.com/downloads
- node - https://nodejs.org/en/download/
- An IDE of your choosing, but try to choose something with TypeScript support. 
    *Visual Studio Code is recommended - https://code.visualstudio.com/
    *Plugin for Sublime - https://github.com/Microsoft/TypeScript-Sublime-Plugin

About environment:
- The project is limited as much as possible to TypeScript, so no grunts, gulps or any kind of bundling or less or any other funny stuff like that
- AMD had to be used to get everything compiled into a single file by the typescript compiler
- Added JQuery and it's typings just as an example
- You need to run a standard npm install
- If your IDE complains about an older version of TypeScript, update it, should be 2.1.6
- The typescript project is in the ts/ folder
- To compile TypeScript run "npm run ts:build" in cmd/terminal
- To enable watch of TypeScript run "npm run ts:watch" in cmd/terminal
- To run the node server "npm start"
- To kill node server close the cmd/terminal window or use whatever your OS supports as the terminate command (Ctrl+c on Windows)
