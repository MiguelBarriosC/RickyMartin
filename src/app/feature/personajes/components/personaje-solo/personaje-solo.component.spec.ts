import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeSoloComponent } from './personaje-solo.component';

describe('PersonajeSoloComponent', () => {
  let component: PersonajeSoloComponent;
  let fixture: ComponentFixture<PersonajeSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
