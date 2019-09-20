import { Component, OnInit } from '@angular/core';
import { CounterState } from '../store/counter.reducer';
import { Store } from '@ngrx/store';
import { IncrementCounterAction, DecrementCounterAction } from '../store/counter.actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  mycount:number;
  /**
   * 4. Inject the store as dependency in required component
   * @param store 
   */
  constructor(private store:Store<CounterState>) { }

  /**
   * 5. Subscribe to store and Dispatch calls
   */
  ngOnInit() {
    // select method takes name 'counter' as defined in app.module
    this.store.select('counter').subscribe(
      (data) => this.mycount = data['counter']
    );
  }

  increment(){
    this.store.dispatch(new IncrementCounterAction());
  }

  decrement(){
    this.store.dispatch(new DecrementCounterAction());
  }
}
