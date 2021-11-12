import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { personaje } from '../../models/personaje';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje-solo',
  templateUrl: './personaje-solo.component.html',
  styleUrls: ['./personaje-solo.component.css']
})
export class PersonajeSoloComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute, private personajeService:PersonajesService) { }

  id:string;
  personaje:personaje;
  personaje$:Subscription;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.personaje$ = this.personajeService.getPersonaje(this.id).subscribe(async (res:personaje) => {
      this.personaje = await res;
    });
  }
  ngOnDestroy() {
    this.personaje$.unsubscribe();
  }
}
