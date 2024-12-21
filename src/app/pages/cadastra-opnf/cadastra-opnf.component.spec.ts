import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraOpnfComponent } from './cadastra-opnf.component';

describe('CadastraOpnfComponent', () => {
  let component: CadastraOpnfComponent;
  let fixture: ComponentFixture<CadastraOpnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraOpnfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraOpnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
