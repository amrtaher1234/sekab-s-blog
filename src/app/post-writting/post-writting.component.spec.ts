import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWrittingComponent } from './post-writting.component';

describe('PostWrittingComponent', () => {
  let component: PostWrittingComponent;
  let fixture: ComponentFixture<PostWrittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWrittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWrittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
