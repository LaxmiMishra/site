import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDocardComponent } from './what-we-docard.component';

describe('WhatWeDocardComponent', () => {
  let component: WhatWeDocardComponent;
  let fixture: ComponentFixture<WhatWeDocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
