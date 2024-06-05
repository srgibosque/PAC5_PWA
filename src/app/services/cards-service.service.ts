import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.interface';

interface ApiResponse {
  cards: Card[];
}

interface ApiResponseSingleCard {
  card: Card;
}

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  private BASE_URL: string;
  private API_VERSION: string;
  private CONTROLLER: string;
  private URL_MAGIC_API: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = "https://api.magicthegathering.io/";
    this.API_VERSION = "v1/";
    this.CONTROLLER = "cards"
    this.URL_MAGIC_API = `${this.BASE_URL}${this.API_VERSION}${this.CONTROLLER}`;
  }

  getCards(pageSize: number): Observable<ApiResponse> {
    const params = new HttpParams().set('pageSize', pageSize.toString());
    return this.http.get<ApiResponse>(this.URL_MAGIC_API, { params })
  }

  getCardByID(id: string): Observable<ApiResponseSingleCard> {
    return this.http.get<ApiResponseSingleCard>(this.URL_MAGIC_API + '/' + id);
  }
}
