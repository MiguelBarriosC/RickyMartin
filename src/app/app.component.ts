import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ ]
})
export class AppComponent {
  title = 'Rick';
  public array: Array<string|number> = ['Konecta',2019, 'Medellin']
}
