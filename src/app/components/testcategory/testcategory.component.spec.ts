import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcategoryComponent } from './testcategory.component';

describe('TestcategoryComponent', () => {
  let component: TestcategoryComponent;
  let fixture: ComponentFixture<TestcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
