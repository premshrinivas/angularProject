import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClpComponent } from './clp.component';

describe('ClpComponent', () => {
  let component: ClpComponent;
  let fixture: ComponentFixture<ClpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
