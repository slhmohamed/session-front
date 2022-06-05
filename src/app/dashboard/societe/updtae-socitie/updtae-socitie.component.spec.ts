import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtaeSocitieComponent } from './updtae-socitie.component';

describe('UpdtaeSocitieComponent', () => {
  let component: UpdtaeSocitieComponent;
  let fixture: ComponentFixture<UpdtaeSocitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdtaeSocitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtaeSocitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
