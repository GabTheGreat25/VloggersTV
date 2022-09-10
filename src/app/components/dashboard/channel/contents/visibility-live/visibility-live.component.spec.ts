import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityLiveComponent } from './visibility-live.component';

describe('VisibilityLiveComponent', () => {
  let component: VisibilityLiveComponent;
  let fixture: ComponentFixture<VisibilityLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
