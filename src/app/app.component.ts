import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content:any;
  constructor(public http: ApiService) {}

  test() {
    this.http.test().then((el) => {
      this.content = el;
    }).catch((error)=> {
      this.content = error;
    })
  }

}
