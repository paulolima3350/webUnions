import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraReuniaoComponent } from './cadastra-reuniao.component';

describe('CadastraReuniaoComponent', () => {
  let component: CadastraReuniaoComponent;
  let fixture: ComponentFixture<CadastraReuniaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraReuniaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
