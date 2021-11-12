import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css']
})
export class ListPersonajesComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute, private router:Router, private personajesService:PersonajesService) { }

  actualPage:string;
  personajes:any;
  personajes$:Subscription;
  filterPost = '';
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.actualPage = params.page ? params.page : 1; // Define la pagina actual 
      this.personajes$ = this.personajesService.getPersonajes(params.page).subscribe(async res => {
        this.personajes = await res;
      });
    }); 
  }
  //Redirecciona a la siguiente pagina
  next() {
    const _page = this.getPage('next');
    if (_page) {
      this.router.navigate(['/personajes'], { queryParams: { page:_page } })
    }
  }
  //Redirecciona a la pagina anterior
  prev() {
    const _page = this.getPage('prev');
    if (_page) {
      this.router.navigate(['/personajes'], { queryParams: { page:_page } })
    }
  }
  //Obtiene la pagina de un string
  getPage(event) {
    const next:string = this.personajes.info[event];
    const _page = next.split('?')[1].split('=')[1];
    return _page;
  }
  ngOnDestroy() {
    this.personajes$.unsubscribe();
  }
}
