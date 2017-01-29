import { Charactersort } from './charactersort.enum';

export class CharacterSortOption {
    name: string;
    sortType: Charactersort;

    constructor(sortType: Charactersort) {
        this.sortType = sortType;
        this.name = Charactersort[sortType];
    }
}
