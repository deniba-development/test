import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Filialen:any;
  Kunden:any;
  Modelle:any;
  prelaoder:Boolean = false;
  type:string = "Filiale"
  constructor(public http: ApiService) {}

  randomColor() {
    let colors = ["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#95a5a6","#f39c12","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#c0392b","#bdc3c7","#7f8c8d","#ecf0f1"];
    let randomNumber = Math.round(Math.random() * colors.length)
    return colors[randomNumber];
  }
  load() {
    this.prelaoder = true;
    this.http.test(this.type).then((obj:any) => {
      this.prelaoder = false;
      console.log(obj)
      switch(this.type) {
        case "Filiale":
          this.Filialen = obj.Filialen;
        break;
        case "Kunde":
          this.Kunden = obj.Kunden;
        break;
        case "Modell":
          this.Modelle = obj.Modelle;
        break; 
      }
    }).catch((error)=> {
      this.prelaoder = false;
      // this.Filialen = error;
    })
  }
  ngOnInit() {
    this.load();
  }

}
