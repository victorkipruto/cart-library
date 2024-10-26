import { TestBed } from '@angular/core/testing';

import { CartLibraryService } from './cart-library.service';

describe('CartLibraryService', () => {
  let service: CartLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
