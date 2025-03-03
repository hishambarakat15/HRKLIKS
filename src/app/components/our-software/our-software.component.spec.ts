import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSoftwareComponent } from './our-software.component';

describe('OurSoftwareComponent', () => {
  let component: OurSoftwareComponent;
  let fixture: ComponentFixture<OurSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
