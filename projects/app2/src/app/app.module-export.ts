import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component: SecondComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
