import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityVideoComponent } from './visibility-video.component';

describe('VisibilityVideoComponent', () => {
  let component: VisibilityVideoComponent;
  let fixture: ComponentFixture<VisibilityVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
