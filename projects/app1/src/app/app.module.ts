import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { counterReducer } from './store/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**
     * 3. Registering reducer with AppModule
     */
    StoreModule.forRoot({
      counter: counterReducer /* counter is the name of the reducer and not the name of the state object */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
