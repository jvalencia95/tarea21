import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostablaComponent } from './postabla.component';

describe('PostablaComponent', () => {
  let component: PostablaComponent;
  let fixture: ComponentFixture<PostablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
