import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { capitulo } from '../../models/capitulo';
import { CapitulosService } from '../../services/capitulos.service';

@Component({
  selector: 'app-capitulo-solo',
  templateUrl: './capitulo-solo.component.html',
  styleUrls: ['./capitulo-solo.component.css']
})
export class CapituloSoloComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute, private capitulosService:CapitulosService) { }

  id:string;
  capitulo:capitulo;
  capitulo$:Subscription;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.capitulo$ = this.capitulosService.getCapitulo(this.id).subscribe(async (res:capitulo) => {
      this.capitulo = await res;
    });
  }
  ngOnDestroy() {
    this.capitulo$.unsubscribe();
  }
}
