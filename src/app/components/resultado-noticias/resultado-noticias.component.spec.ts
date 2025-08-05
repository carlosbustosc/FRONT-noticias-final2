import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoNoticiasComponent } from './resultado-noticias.component';

describe('ResultadoNoticiasComponent', () => {
  let component: ResultadoNoticiasComponent;
  let fixture: ComponentFixture<ResultadoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
