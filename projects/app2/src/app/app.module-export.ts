import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { counterReducer } from './store/counter.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component: SecondComponent}]),
    StoreModule.forFeature('counter', counterReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
