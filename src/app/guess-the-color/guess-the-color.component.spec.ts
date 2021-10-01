import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessTheColorComponent } from './guess-the-color.component';

describe('GuessTheColorComponent', () => {
  let component: GuessTheColorComponent;
  let fixture: ComponentFixture<GuessTheColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessTheColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessTheColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
