import { Component } from "@angular/core";

@Component({
  // selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html'  ,  // file path to simply start (witjin Component)
  // file path to define outside component
//   template: `
//   <app-server></app-server>
//   <app-server></app-server>
//   `
styles:[`
.logscolor { 
  color: white;
}
`]
})

export class ServersComponent {
    title ='joy';username="TashuJoy"
    newServer: boolean = false;
    newServerstatus:boolean = false;
    serverCreated = 'Server Not created';
    serverName='testserver';
    servers = ['testserver','testserver1'];
    buttonclicked; password: string = 'Tuna';
    clicks =0;
    clicklog=[];
    constructor(){
      console.log('New Server' , this.newServer)
      setTimeout( () => {
        this.newServer = true;
      } , 5000);
      console.log(' After 2 sec New Server' , this.newServer);
      this.buttonclicked = false;
  

    }
    // Event Binding
    onServerCreated(){
      this.servers.push(this.serverName)
      this.newServerstatus = true
        this.serverCreated = 'Server created Successfully'
        this.newServer = false;
    }
    updateServerName(event:any){
      console.log('Event:', event.target.value);
      this.serverName = (<HTMLInputElement>event.target).value;
    }
    buttonclick(){
      this.clicklog.push(this.clicklog.length + 1)
      // this.clicklog.push(new Date())
      return this.buttonclicked = true;
    }
    getcolour(){
      return this.clicklog.length >= 5 ? 'blue' : 'transparent'
    }
}