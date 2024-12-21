import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMembroComponent } from './cadastra-membro.component';

describe('CadastraMembroComponent', () => {
  let component: CadastraMembroComponent;
  let fixture: ComponentFixture<CadastraMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
