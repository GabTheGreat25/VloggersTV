import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBodyComponent } from './video-body.component';

describe('VideoBodyComponent', () => {
  let component: VideoBodyComponent;
  let fixture: ComponentFixture<VideoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
