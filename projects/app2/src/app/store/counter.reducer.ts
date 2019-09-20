import { CounterActionTypes, CounterActions } from './counter.actions';

 export interface CounterState {
     counter: number;
 }

 const initialState:CounterState = { counter: 0 };

 export let counterReducer = ( state=initialState, action:CounterActions) : CounterState =>{
    switch(action.type){
        case CounterActionTypes.Increment: return { counter: state.counter+1 }
        case CounterActionTypes.Decrement: return { counter: state.counter-1 }
        default: return state;
    }
 }