import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-app-pipe4';
  testName = "SHREEE";
  now = new Date();
  jsonObj = {
    id: 100, name: 'Shiva', age: 22, address: {
      city: 'Bangalore', state: 'Karnataka'
    }, contact: 1234567899
  };
  fruits=['Apple','Orange','Banana','Mango','Kiwi','Pomogrenate','Watermelon'];
  firstName="Sachin";
  lastName="Ramesh Tendulkar";
}
