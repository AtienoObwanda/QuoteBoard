import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteActionComponent } from './quote-action.component';

describe('QuoteActionComponent', () => {
  let component: QuoteActionComponent;
  let fixture: ComponentFixture<QuoteActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
