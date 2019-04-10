import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {

  //static API_URL = 'http://104.196.102.231/logon';
  //static API_URL2 = 'http://104.196.102.231/tamanhos';
  //static API_URL3 = 'http://104.196.102.231/sabores/';
  static API_URL =  'http://localhost:3500/logon';
  static API_URL2 = 'http://localhost:3500/tamanhos';
  static API_URL3 = 'http://localhost:3500/sabores/';

  name: any;

  constructor(public http: HttpClient) { }

  public login(credentials) {
    return new Promise((resolve, reject) => {
      this.http.post(AutenticacaoProvider.API_URL, credentials)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });
  }

  public tamanhos() {
    return new Promise((resolve, reject) => {
      this.http.get(AutenticacaoProvider.API_URL2)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });
  }

  public sabores(id) {
    return new Promise((resolve, reject) => {
      this.http.get(AutenticacaoProvider.API_URL3 + id)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.error);
        });
    });
  }

}
