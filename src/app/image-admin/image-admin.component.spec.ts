import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAdminComponent } from './image-admin.component';

describe('ImageAdminComponent', () => {
  let component: ImageAdminComponent;
  let fixture: ComponentFixture<ImageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
