import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  private mainUrl: string;
  private version: string;
  private urlMagicApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.mainUrl = "https://api.magicthegathering.io/";
    this.version = "v1/";
    this.controller = "cards"
    this.urlMagicApi = this.mainUrl + this.version + this.controller;
  }

  getCards(): Observable<Object> {
    const params = new HttpParams().set('pageSize', '48');
    
    return this.http.get(this.urlMagicApi, { params })
  }
}
