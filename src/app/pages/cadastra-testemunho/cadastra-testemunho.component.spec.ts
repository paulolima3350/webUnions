import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTestemunhoComponent } from './cadastra-testemunho.component';

describe('CadastraTestemunhoComponent', () => {
  let component: CadastraTestemunhoComponent;
  let fixture: ComponentFixture<CadastraTestemunhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraTestemunhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraTestemunhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
