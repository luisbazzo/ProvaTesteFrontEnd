import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { anuncio } from './anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  url = 'localhost:3000/anuncios';

  constructor(private http : HttpClient) { }

  getAds(): Observable<anuncio[]>{
    return this.http.get<anuncio[]>(this.url);
  }

  saveAds(ad : anuncio): Observable<anuncio>{
    return this.http.post<anuncio>(this.url, ad);
  }
}
