import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectWinnerComponent } from './detect-winner.component';

describe('DetectWinnerComponent', () => {
  let component: DetectWinnerComponent;
  let fixture: ComponentFixture<DetectWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
