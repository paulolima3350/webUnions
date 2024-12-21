import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeEducaoComponent } from './unidade-educao.component';

describe('UnidadeEducaoComponent', () => {
  let component: UnidadeEducaoComponent;
  let fixture: ComponentFixture<UnidadeEducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeEducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeEducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
