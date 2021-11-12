import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../../../shared/config/config';
import { personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  baseURL = config.baseURL;
  
  //Obtiene los personajes
  getPersonajes(page:string):Observable<personaje[]> {
    if (!page) page = '1';
    return this.http.get<personaje[]>(this.baseURL + `character/?page=${ page }`).pipe(catchError(err => {
      throw err;
    }));
  }
  //Obtiene un personaje
  getPersonaje(id:string):Observable<personaje> {
    return this.http.get<personaje>(this.baseURL + `character/${id}`).pipe(catchError(err => {
      throw err;
    }));
  }
}
