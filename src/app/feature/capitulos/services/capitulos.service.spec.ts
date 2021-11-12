import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { data } from '../../../shared/config/unit-test/data-test';
import { personaje } from '../../personajes/models/personaje';
import { capitulo } from '../models/capitulo';
import { CapitulosService } from './capitulos.service';

describe('CapitulosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CapitulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CapitulosService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new CapitulosService(httpClientSpy as any);
  });

  it('Debera retornar la pagina 1 de capitulos(HttpClient llamado una sola vez)', () => {
    
    const expectedCapitulos: any = data.capitulos.pagina_1;
    httpClientSpy.get.and.returnValue(of(expectedCapitulos));
  
    service.getCapitulos('1').subscribe(
      capitulos => expect(capitulos).toEqual(expectedCapitulos, 'fail expected capitulos'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('Debera retornar el capitulo con id 1(HttpClient llamado una sola vez)', () => {
    
    const expectedCapitulo: capitulo = data.capitulos.pagina_1.results[0];
    httpClientSpy.get.and.returnValue(of(expectedCapitulo));
  
    service.getCapitulo('1').subscribe(
      capitulo => expect(capitulo).toEqual(expectedCapitulo, 'fail expected capitulo'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('Con los ids de personajes dados debera retornar un array de estos personajes(HttpClient llamado una sola vez)', () => {
    
    const expectedPersonajes: personaje[] = data.capitulos.personajes_1_138;
    httpClientSpy.get.and.returnValue(of(expectedPersonajes));
  
    service.getCharactersOfEpisodeByIds('1,138').subscribe(
      personajes => expect(personajes).toEqual(expectedPersonajes, 'fail expected personajes'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
