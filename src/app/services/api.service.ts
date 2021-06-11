import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://srv1.deniba.at:1984/';
  constructor(private http : HttpClient) { }

  test() {
    let body = {​​​​
      "MetaInfo": {​​​​​​​​​​​​​​​​​​​​​​​​​
          "Object": "Filiale",
          "Action": "query",
          "Offset": "0",
          "MaxRows": "20"
      }​​​​​​​​​​​​​​​​​​​​​​​​​,
      "Parameters": {​​​​​​​​​​​​​​​​​​​​​​​​​
          "FilialeNr":  "",
          "Abkuerzung": "",
          "Filiale": ""
      }​​​​​​​​​​​​​​​​​​​​​​​​​
    }​​​​​​​​​​​​​​​​​​​​​​​​​;
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});
    let options = { headers,withCredentials:false};
    return this.http.post(this.baseURL+"deniba",body, options).toPromise();
  }
}