import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers'
  //selector: '[app-servers]'
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  //emptyUsername = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  // createUser = 'Create a username.'
  // username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  OnCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName); //pushes newly created server into servers array
    this.serverCreationStatus = this.serverName + ' has been created.'
  }

  OnUpdateServerName(event:Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
