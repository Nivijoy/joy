import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']   // within component 
  // External file reference for styles
  styles: [`
    h3{
      color : dodgerblue;
    }
    `]
})
export class AppComponent {
  title = 'joy';
  
}
