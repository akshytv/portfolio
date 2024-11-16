import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperianceComponent } from './about-experiance.component';

describe('AboutExperianceComponent', () => {
  let component: AboutExperianceComponent;
  let fixture: ComponentFixture<AboutExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
