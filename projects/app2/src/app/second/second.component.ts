import { Component, OnInit } from '@angular/core';
import { CounterState } from '../store/counter.reducer';
import { Store } from '@ngrx/store';
import { IncrementCounterAction } from '../store/counter.actions';
import { DecrementCounterAction } from 'projects/app1/src/app/store/counter.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  secondCount: number;

  constructor(private store:Store<CounterState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(
      (data) => this.secondCount = data['counter']
    );
  }

  increment(){
    this.store.dispatch(new IncrementCounterAction());
  }

  decrement(){
    this.store.dispatch(new DecrementCounterAction());
  }

}
