import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloSoloComponent } from './capitulo-solo.component';

describe('CapituloSoloComponent', () => {
  let component: CapituloSoloComponent;
  let fixture: ComponentFixture<CapituloSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
