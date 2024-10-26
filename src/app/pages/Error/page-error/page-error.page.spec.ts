import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageErrorPage } from './page-error.page';

describe('PageErrorPage', () => {
  let component: PageErrorPage;
  let fixture: ComponentFixture<PageErrorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
