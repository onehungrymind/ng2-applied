import { Component, OnInit } from '@angular/core';
import { Widget, widgets } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget> = widgets;
  selectedWidget: Widget;

  constructor() {}

  ngOnInit() {}

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  deleteWidget(widget: Widget) {
    this.widgets.splice(this.widgets.indexOf(widget), 1);
    this.resetWidget();
  }
}

