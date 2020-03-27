import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllNewBooksComponent } from './list-all-new-books.component';

describe('ListAllNewBooksComponent', () => {
  let component: ListAllNewBooksComponent;
  let fixture: ComponentFixture<ListAllNewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllNewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllNewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
