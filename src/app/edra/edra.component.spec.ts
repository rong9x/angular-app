import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdraComponent } from './edra.component';

describe('EdraComponent', () => {
  let component: EdraComponent;
  let fixture: ComponentFixture<EdraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
