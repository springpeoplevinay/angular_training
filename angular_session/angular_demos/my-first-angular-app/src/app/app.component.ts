import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'myapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// template:'<h1>hello from template... App name is {{title}}</h1>',
export class AppComponent {
  title = "Demo APP";
  developer = "Vinay"
  user = new User();
  hello:string;
  flag:boolean=false;
  constructor() {
    this.user.id = 100;
    this.user.name = "Sourav Ganguly"
    this.user.avatar = "https://i.makeagif.com/media/3-15-2018/EjrBsm.gif"
  }
  public sayHello(): void {
    this.flag=true;
    this.hello="Hello from Event binding"
   
  }


}
