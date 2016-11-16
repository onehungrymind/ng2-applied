import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturedWidgetComponent } from './widgets/featured-widget/featured-widget.component';

const routes: Routes = [
  {path: '',      redirectTo: '/widgets', pathMatch: 'full' },
  {path: 'widgets', component: WidgetsComponent, children: [
    {path: ''},
    {path: 'featured/:id', component: FeaturedWidgetComponent}
  ]},
  {path: '**',     redirectTo: '/widgets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
