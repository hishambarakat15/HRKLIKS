import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHrklixComponent } from './why-hrklix.component';

describe('WhyHrklixComponent', () => {
  let component: WhyHrklixComponent;
  let fixture: ComponentFixture<WhyHrklixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyHrklixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyHrklixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
