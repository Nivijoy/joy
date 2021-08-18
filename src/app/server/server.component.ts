import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'  , // file path to simply start
  // template: `<app-server></app-server>`
  styles:[`
    .online { 
      color: white;
    }
  `]
})

export class ServerComponent {
    title ='joy';serverstatus: string = 'offline';
    constructor(){
      this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getcolour(){
      return this.serverstatus ==  'online' ? 'green' : 'red';
    }
}