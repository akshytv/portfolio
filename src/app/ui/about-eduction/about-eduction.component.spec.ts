import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEductionComponent } from './about-eduction.component';

describe('AboutEductionComponent', () => {
  let component: AboutEductionComponent;
  let fixture: ComponentFixture<AboutEductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
