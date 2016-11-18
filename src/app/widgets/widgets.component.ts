import { Component, OnInit } from '@angular/core';
import { Widget, widgets } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget> = widgets;

  constructor() {}

  ngOnInit() {}
}

