import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtomComponent } from './my-buttom.component';

describe('MyButtomComponent', () => {
  let component: MyButtomComponent;
  let fixture: ComponentFixture<MyButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyButtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
