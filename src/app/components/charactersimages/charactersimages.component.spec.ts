/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KhapiService } from '../../services/khapi.service';
import { CharactersimagesComponent } from './charactersimages.component';
import { HttpModule } from '@angular/http';

describe('CharactersimagesComponent', () => {
  let component: CharactersimagesComponent;
  let fixture: ComponentFixture<CharactersimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [CharactersimagesComponent],
      providers: [KhapiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
