import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingBlockComponent } from './writing-block.component';

describe('WritingBlockComponent', () => {
  let component: WritingBlockComponent;
  let fixture: ComponentFixture<WritingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
