import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarConvidadoComponent } from './criar-convidado.component';

describe('CriarConvidadoComponent', () => {
  let component: CriarConvidadoComponent;
  let fixture: ComponentFixture<CriarConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarConvidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
