import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHttpComponent } from './user-http.component';

describe('UserHttpComponent', () => {
  let component: UserHttpComponent;
  let fixture: ComponentFixture<UserHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
