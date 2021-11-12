import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { capitulo } from '../../models/capitulo';
import { CapitulosService } from '../../services/capitulos.service';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit, OnDestroy {

  @Input() Capitulo:capitulo;
  _capitulo:any;
  personajes$:Subscription;

  constructor(private capituloService:CapitulosService, private router:Router) { }

  ngOnInit(): void {
    //clonación de objeto capitulo
    this._capitulo = {...this.Capitulo};
    if(this._capitulo) {
      const personajesIds = this.getPersonajesIds(this._capitulo.characters);
      this.personajes$ = this.capituloService.getCharactersOfEpisodeByIds(personajesIds).subscribe(async res => {
        this._capitulo.characters = await res;
      });
    }
  }
  //Redirecciona a un personaje seleccionado
  personajeChange(event) {
    if (event != 'selected') {
      this.router.navigate(['/personajes',event ])
    }
  }
  //Obtiene los ids de los personajes de un capitulo
  getPersonajesIds(arr:any): string{
    let personajesIds = [];
    arr.forEach(element => {
      const el = element.split('/')[5];
      personajesIds.push(el);
    });
    return personajesIds.toString();
  }
  ngOnDestroy() {
    this.personajes$.unsubscribe();
  }
}
