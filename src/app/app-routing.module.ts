import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "app1",
    loadChildren: "../../projects/app1/src/app/app.module-export#AppModule"
  },
  {
    path: "app2",
    loadChildren: "../../projects/app2/src/app/app.module-export#AppModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
