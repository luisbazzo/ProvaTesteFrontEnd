import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { anuncio } from './anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  url = "http://localhost:8080/anuncios";

  constructor(private http : HttpClient) { }

  getAds(): Observable<anuncio[]>{
    return this.http.get<anuncio[]>(this.url);
  }

  saveAds(anuncio : anuncio): Observable<anuncio>{
    return this.http.post<anuncio>(this.url, anuncio);
  }
}
