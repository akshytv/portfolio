import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarousalComponent } from './my-carousal.component';

describe('MyCarousalComponent', () => {
  let component: MyCarousalComponent;
  let fixture: ComponentFixture<MyCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
