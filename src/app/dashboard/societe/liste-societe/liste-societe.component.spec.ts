import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSocieteComponent } from './liste-societe.component';

describe('ListeSocieteComponent', () => {
  let component: ListeSocieteComponent;
  let fixture: ComponentFixture<ListeSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
