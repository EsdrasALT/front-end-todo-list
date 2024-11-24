import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveRegistrationComponent } from './objective-registration.component';

describe('ObjectiveRegistrationComponent', () => {
  let component: ObjectiveRegistrationComponent;
  let fixture: ComponentFixture<ObjectiveRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
