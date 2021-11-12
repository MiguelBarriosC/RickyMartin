import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaje } from '../../models/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  @Input() Personaje:personaje;
  _person:personaje;
  constructor(private router:Router) { }

  ngOnInit() {
    //clonación de objeto person
    this._person = {...this.Personaje}
    if (this._person) {
      const episodes = this.getCapitulosIds(this._person.episode);
      this._person.episode = episodes;
    }
  }
  //Retorna ids de los episodios en los que aparece el personaje
  getCapitulosIds(arr:any) {
    let episodesIds = [];
    arr.forEach(element => {
      const el = element.split('/')[5];
      episodesIds.push(el);
    });
    return episodesIds;
  }
  //Redirecciona a un capitulo seleccionado
  capituloChange(event) {
    if (event != 'selected') {
      this.router.navigate(['/capitulos',event ])
    }
  }
}
