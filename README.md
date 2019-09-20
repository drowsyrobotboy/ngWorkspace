# Mainapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## How to use ngRx (Refer to sub-app app1)

1. Create `store` folder in app to define the @ngrx store data
2. Create `store/counter.actions.ts` to define the Action Object. 
    - In this file, we first define an `enum` to store that determines the what values the `type` key of our Action Object takes.
    - Next, we create three different action classes (to be used with dispatch later) - which implement the interface `@ngrx/store/Action`
    - Finally we create a *Union Type* to combine the above three classes and call it `CounterActions`

3. Create `store/counter.reducer.ts` to 
    - Define an interface called `CounterState` with a `counter` member - which will be used to create state objects
    - Create a state object of the type interface and initialize the required `counter` to some value
    - Define a reducer which takes the above state object and an action:CounterActions (created earlier) as parameters
    - Inside the reducer, pass each of the CounterActionTypes enum members as a case with their corresponding logics to be applied on the state.

4. In the `app.module.ts`, register the above defined reducer in imports
    ```
    StoreModule.forRoot({
      counter: counterReducer /* counter is the name of the reducer and not member of the state object */
    })
    ```
5. In `first.component.ts`
    - Define a data-member to store the value of store variables (in out case, store.counter's value)
    - Inject the store as a dependency in the constructor()
        ```
        constructor(private store:Store<CounterState>) { }
        ```
    - Subscribe to updates from the store under ngOnInit
6. 

when workinf with sub apps which contain stores

Finally in main app module, we have to update StoreModule.forRoot and in sub apps .. user .forFeature in app.module-exports

Initiavl value of store may be different in boh sub applications .. but once data is changed .. it changes in both - so in main app .. it depends on which application loads first