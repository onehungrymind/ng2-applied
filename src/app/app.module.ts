import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';
import { FeaturedWidgetComponent } from './widgets/featured-widget/featured-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailComponent,
    FeaturedWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
