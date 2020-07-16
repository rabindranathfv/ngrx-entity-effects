import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityComponent } from './components/entity/entity.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';


const routes: Routes = [
  {
    path: 'entities',
    component: EntityComponent
  },
  {
    path: 'policy',
    component: PolicyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
