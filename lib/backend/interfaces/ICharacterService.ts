import { Character } from ".prisma/client";

export interface ICharacterService {
    createCharacter(character: Character): Promise<Character>;
    getAllCharacters(): Promise<Character[]>;
    getCharacterById(id: number): Promise<Character>;
    deleteCharacterById(id: number): Promise<Character>;
    updateCharacterById(id: number, character: Character): Promise<Character>;
}
