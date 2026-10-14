import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMedicalRecords } from './my-medical-records';

describe('MyMedicalRecords', () => {
  let component: MyMedicalRecords;
  let fixture: ComponentFixture<MyMedicalRecords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMedicalRecords],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMedicalRecords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
