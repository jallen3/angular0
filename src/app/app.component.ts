import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  emptyUsername = false;
  //createUser = 'Create a username.'
  username = '';
  displayDetails = false;
  buttonClicks = [];

  OnCreateUsername() {
    this.username = '';
  }

  OnToggleDetails() {
    this.displayDetails = !this.displayDetails;
    // this.buttonClicks.push(this.buttonClicks.length +1);
    this.buttonClicks.push(new Date());
  }

 
}
