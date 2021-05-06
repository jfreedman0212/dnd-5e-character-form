import { Character } from ".prisma/client";

export interface ICharacterService {
    createCharacter(character: Character): Promise<Character>;
    getAllCharacters(): Promise<Character[]>;
    getCharacterById(id: number): Promise<Character>;
}
