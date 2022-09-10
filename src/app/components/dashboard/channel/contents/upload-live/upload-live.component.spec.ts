import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLiveComponent } from './upload-live.component';

describe('UploadLiveComponent', () => {
  let component: UploadLiveComponent;
  let fixture: ComponentFixture<UploadLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
