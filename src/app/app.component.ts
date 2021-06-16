import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Filialen:any;
  prelaoder:Boolean = false;
  constructor(public http: ApiService) {}

  ngOnInit() {
    this.prelaoder = true;
    this.http.test().then((obj:any) => {
      this.prelaoder = false;
      console.log(obj)
      this.Filialen = obj.Filialen;
    }).catch((error)=> {
      this.prelaoder = false;
      // this.Filialen = error;
    })
  }

}
