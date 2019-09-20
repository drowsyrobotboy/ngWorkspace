import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component: FirstComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
