import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapitulosComponent } from './list-capitulos.component';

describe('ListCapitulosComponent', () => {
  let component: ListCapitulosComponent;
  let fixture: ComponentFixture<ListCapitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCapitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
