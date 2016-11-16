import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {path: '',      redirectTo: '/widgets', pathMatch: 'full' },
  {path: 'widgets', component: WidgetsComponent},
  {path: '**',     redirectTo: '/widgets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
