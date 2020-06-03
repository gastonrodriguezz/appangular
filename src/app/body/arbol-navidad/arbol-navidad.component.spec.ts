import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolNavidadComponent } from './arbol-navidad.component';

describe('ArbolNavidadComponent', () => {
  let component: ArbolNavidadComponent;
  let fixture: ComponentFixture<ArbolNavidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolNavidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolNavidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
