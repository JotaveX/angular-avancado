import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempleFormComponent } from './exemple-form/exemple-form.component';
import { ExempleListComponent } from './exemple-list/exemple-list.component';

const routes: Routes = [
  { path: '', component: ExempleListComponent},
  { path: 'new', component: ExempleFormComponent},
  { path: ':id/edit', component: ExempleFormComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
