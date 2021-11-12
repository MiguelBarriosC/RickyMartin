import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonajesComponent } from './list-personajes.component';

describe('ListPersonajesComponent', () => {
  let component: ListPersonajesComponent;
  let fixture: ComponentFixture<ListPersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
