import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMembroComponent } from './area-membro.component';

describe('AreaMembroComponent', () => {
  let component: AreaMembroComponent;
  let fixture: ComponentFixture<AreaMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
