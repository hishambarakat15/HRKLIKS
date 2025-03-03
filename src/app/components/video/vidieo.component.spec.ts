import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidieoComponent } from './vidieo.component';

describe('VidieoComponent', () => {
  let component: VidieoComponent;
  let fixture: ComponentFixture<VidieoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidieoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidieoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
