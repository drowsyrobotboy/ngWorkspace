import { CounterActionTypes, CounterActions } from './counter.actions';

/**
 * 2. Create a state interface and Reducer function to accept state of the store and action to be performed on the state
 */

// Instead of a class, create an interface for the state - only define datatypes
 export interface CounterState {
     counter: number;
 }

 const initialState:CounterState = { counter: 90};

 export let counterReducer = ( state=initialState, action:CounterActions) : CounterState =>{
    switch(action.type){
        case CounterActionTypes.Increment: return { counter: state.counter+1 }
        case CounterActionTypes.Decrement: return { counter: state.counter-1 }
        default: return state;
    }
 }

 /**
  * 3. Now we have to impot in app module and initialize store in forRoot method of StoreModule. Go to app.module.ts
  */