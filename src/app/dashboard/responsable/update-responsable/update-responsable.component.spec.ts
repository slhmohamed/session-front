import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResponsableComponent } from './update-responsable.component';

describe('UpdateResponsableComponent', () => {
  let component: UpdateResponsableComponent;
  let fixture: ComponentFixture<UpdateResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
