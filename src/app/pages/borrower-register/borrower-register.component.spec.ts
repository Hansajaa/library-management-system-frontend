import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerRegisterComponent } from './borrower-register.component';

describe('BorrowerRegisterComponent', () => {
  let component: BorrowerRegisterComponent;
  let fixture: ComponentFixture<BorrowerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowerRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrowerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
