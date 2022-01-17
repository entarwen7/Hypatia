import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderViewComponent } from './leader-view.component';

describe('LeaderViewComponent', () => {
  let component: LeaderViewComponent;
  let fixture: ComponentFixture<LeaderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
