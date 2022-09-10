import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBodyComponent } from './comment-body.component';

describe('CommentBodyComponent', () => {
  let component: CommentBodyComponent;
  let fixture: ComponentFixture<CommentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
