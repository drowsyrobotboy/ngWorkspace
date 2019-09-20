/**
 * 1. Create Types of Action and Actions for ngRx
 * 
 * export enum actionTypes{
 *  typeIdentifier = [state] "actionType";
 * }
 * 
 */
import { Action } from '@ngrx/store'

 // action types must follow a standard
 export enum CounterActionTypes{
     InitCounter = "[Counter] Init",
     Increment = "[Counter] Inc",
     Decrement = "[Counter] Dec"
 }

 // Actions must implement Action Interface of @ngRx/store. Their .type key will be of type CounterActionTypes
 export class IncrementCounterAction implements Action{
     readonly type = CounterActionTypes.Increment;
 }

 export class DecrementCounterAction implements Action{
     readonly type = CounterActionTypes.Decrement;
 }

 export class InitialCounterAction implements Action{
     readonly type = CounterActionTypes.InitCounter;
 }

 // Union of all three actions
 export type CounterActions = IncrementCounterAction | DecrementCounterAction | InitialCounterAction;
