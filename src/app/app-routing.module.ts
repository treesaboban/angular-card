import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardManagerComponent } from './card-manager/card-manager.component';

const routes: Routes = [
  {
    path:'',redirectTo:'card/main',pathMatch:'full'
  },
  {
    path:'card/main',component:CardManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
