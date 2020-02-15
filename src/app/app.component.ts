import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-drag-and-drop-learning';
  // Setting the options of the dragula component
  options: any = {
    removeOnSpill: true
  }

  // Inject the dragula service into the constructor
  constructor(private dragulaService: DragulaService) { }
}
