import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosrequeridosComponent } from './datosrequeridos.component';

describe('DatosrequeridosComponent', () => {
  let component: DatosrequeridosComponent;
  let fixture: ComponentFixture<DatosrequeridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosrequeridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosrequeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
