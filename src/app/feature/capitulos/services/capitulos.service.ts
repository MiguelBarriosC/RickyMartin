import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { config } from '../../../shared/config/config';
import { personaje } from '../../personajes/models/personaje';
import { capitulo } from '../models/capitulo';

@Injectable({
  providedIn: 'root'
})

export class CapitulosService {
  baseURL = config.baseURL;
  constructor(private http:HttpClient) { }

  //Obtiene los capitulos por pagina
  getCapitulos(page:string): Observable<capitulo[]> {
    if (!page) page = '1';
    return this.http.get<capitulo[]>(this.baseURL + `episode?page=${ page }`).pipe(catchError(err => {
      throw err;
    }));
  }
  //Obtiene un capitulo
  getCapitulo(id:string): Observable<capitulo> {
    return this.http.get<capitulo>(this.baseURL + `episode/${id}`).pipe(catchError(err => {
      throw err;
    }));
  }
  //Obtiene los personajes del capitulo  
  getCharactersOfEpisodeByIds(ids:string): Observable<personaje[]>{
    return this.http.get<personaje[]>(this.baseURL + `character/${ids}`).pipe(catchError(err => {
      throw err;
    }));
  }
}
