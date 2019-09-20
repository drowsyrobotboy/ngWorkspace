import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component: FirstComponent}]),
    StoreModule.forFeature('counter', counterReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
