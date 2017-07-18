# FlashCards (Quickstart)

Questions and answers related to Angular 2.

How do you convert TypeScript into JavaScript?  
__R__: We use a transpiler to convert TypeScript into either ES5 or ES6 JavaScript.

How do we import code from another module?  
__R__: We use an import statement like: `import { x } from foo;`

What is a Component?  
__R__: This is the basic building block of and Angular application.
We have a tree of components stemming from one root component.

How do we create a component?  
__R__: We annotate a class with an `@Component` decorator.

What function does SystemJS play in our Angular ecosystem?  
__R__: It figures out how to bundle and load dependant modules.
As well as transpilation of TypeScript into JavaScript (in Plunker).

How do we link a compoennt class in TypeScript to a tag in HTML?  
__R__: We use the `selector` property on the `@Component` decorator.

How do we create an Angular Module?  
__R__: We create a class and then annotate it with the `@NgModule` decorator.

What are the three main properties of the @NgModule annotation?  
__R__: `imports`, `declarations` and `bootstrap`.

How do we bootstrap an Angular application?  
__R__: We create a root Angular Module and then bootstrap it with:
```typescript
platformBrowserDynamic().bootstrapModule(AppModule);
```

What directive do we use to loop over an array and repeat a HTML element?  
__R__: We use the `ngFor` directive.

What special syntax do we use to display the value of a component property in a components template?  
__R__: We use the moustache syntax `{{ }}`.

What special template syntax do we use to link a DOM element to a local template variable?  
__R__: We use a Template Local Variable like so:
`element ... #variable>`

What syntax do we use to bind to an input of a component or element?  
__R__: We use `[property]`.

What syntax do we use to bind to an output event of a component or element?  
__R__: We use `(event)`.