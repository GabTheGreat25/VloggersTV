import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousVideoComponent } from './previous-video.component';

describe('PreviousVideoComponent', () => {
  let component: PreviousVideoComponent;
  let fixture: ComponentFixture<PreviousVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
