import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesService } from './personajes.service';
import { personaje } from '../../personajes/models/personaje';
import { data } from '../../../shared/config/unit-test/data-test';
import { of } from 'rxjs';

describe('PersonajesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: PersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PersonajesService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new PersonajesService(httpClientSpy as any);
  });

  it('Debera retornar la pagina 1 de personajes(HttpClient llamado una sola vez)', () => {
    
    const expectedPersonajes: any = data.personajes.pagina_1;
    httpClientSpy.get.and.returnValue(of(expectedPersonajes));
  
    service.getPersonajes('1').subscribe(
      personajes => expect(personajes).toEqual(expectedPersonajes, 'fail expected personajes'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('Debera retornar el personaje con id 1(HttpClient llamado una sola vez)', () => {
    
    const expectedPersonaje: personaje = data.personajes.pagina_1[0];
    httpClientSpy.get.and.returnValue(of(expectedPersonaje));
  
    service.getPersonaje('1').subscribe(
      personaje => expect(personaje).toEqual(expectedPersonaje, 'fail expected personaje'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
