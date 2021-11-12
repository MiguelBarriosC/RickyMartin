import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CapitulosService } from '../../services/capitulos.service';

@Component({
  selector: 'app-list-capitulos',
  templateUrl: './list-capitulos.component.html',
  styleUrls: ['./list-capitulos.component.css']
})
export class ListCapitulosComponent implements OnInit, OnDestroy {

  constructor(private capitulosService:CapitulosService, private route:ActivatedRoute, private router:Router) { }
  actualPage: string;
  capitulos:any;
  capitulos$:Subscription;
  filterPost:string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.actualPage = params.page ? params.page : 1; 
      this.capitulos$ = this.capitulosService.getCapitulos(params.page).subscribe(async res => {
        this.capitulos = await res;
      });
    }); 
  }
  //Redirecciona a la pagina siguente
  next() {
    const _page = this.getPage('next');
    if (_page) {
      this.router.navigate(['/capitulos'], { queryParams: { page:_page } })
    }
    console.log(_page);
  }
  //Redirecciona a la pagina anterior
  prev() {
    const _page = this.getPage('prev');
    if (_page) {
      this.router.navigate(['/capitulos'], { queryParams: { page:_page } })
    }
  }
  //Obtiene la pagina de un string
  getPage(event) {
    const next:string = this.capitulos.info[event];
    const _page = next.split('?')[1].split('=')[1];
    return _page;
  }
  ngOnDestroy() {
    this.capitulos$.unsubscribe();
  }
}
