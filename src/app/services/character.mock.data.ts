import { Character } from '../models/character';

export class CharacterMockData {
    characters: Character[];

    constructor() {
        let zss: Character = new Character();
        zss.displayName = 'Zero Suit Samus';
        zss.fullUrl = 'http://kuroganehammer.com/Smash4/Zero%20Suit%20Samus';
        zss.id = 58;
        zss.name = 'Zerosuitsamus';

        let zelda: Character = new Character();
        zelda.displayName = 'Zelda';
        zelda.fullUrl = 'http://kuroganehammer.com/Smash4/Zelda';
        zelda.id = 57;
        zelda.name = 'Zelda';

        let yoshi: Character = new Character();
        yoshi.displayName = 'Yoshi';
        yoshi.name = 'Yoshi';
        yoshi.id = 56;
        yoshi.fullUrl = 'http://kuroganehammer.com/Smash4/Yoshi';
        this.characters = [zelda, zss, yoshi];
    }
}