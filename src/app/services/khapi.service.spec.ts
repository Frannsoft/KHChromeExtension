/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhapiService } from './khapi.service';
import { HttpModule } from '@angular/http';

describe('KhapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [KhapiService]
    });
  });

  it('should create khapi service', inject([KhapiService], (service: KhapiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get character data', inject([KhapiService], (service: KhapiService) => {
    let characters = service.getCharacterMetadata();
    expect(characters).not.toBeNull();
  }));

  it('should get character metadata with expected properties', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMetadata().then(characters => {
      characters.forEach(c => {
        expect(c.displayName).not.toBeNull();
        expect(c.fullUrl).not.toBeNull();
        expect(c.id).not.toBeNull();
        expect(c.name).not.toBeNull();
      });
    });
  }));

  it('should get character movement data with expected properties', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMovementData(2).then(movements => {
      movements.forEach(m => {
        expect(m.id).not.toBeNull();
        expect(m.value).not.toBeNull();
        expect(m.ownerId).not.toBeNull();
        expect(m.name).not.toBeNull();
      });
    });
  }));

  it('should get character move data with expected properties', inject([KhapiService], (service: KhapiService) => {
    service.getCharacterMoveData(2).then(moves => {
      moves.forEach(m => {
        expect(m.id).not.toBeNull();
        expect(m.angle).not.toBeNull();
        expect(m.autoCancel).not.toBeNull();
        expect(m.baseDamage).not.toBeNull();
        expect(m.baseKnockBackSetKnockback).not.toBeNull();
        expect(m.firstActionableFrame).not.toBeNull();
        expect(m.hitboxActive).not.toBeNull();
        expect(m.knockbackGrowth).not.toBeNull();
        expect(m.landingLag).not.toBeNull();
        expect(m.name).not.toBeNull();
        expect(m.type).not.toBeNull();
        expect(m.ownerId).not.toBeNull();
      });
    });
  }));
});
