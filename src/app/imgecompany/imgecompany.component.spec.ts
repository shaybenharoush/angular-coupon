import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgecompanyComponent } from './imgecompany.component';

describe('ImgecompanyComponent', () => {
  let component: ImgecompanyComponent;
  let fixture: ComponentFixture<ImgecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
