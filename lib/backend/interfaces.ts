import { Character, PrismaClient } from ".prisma/client";

export interface ICharacterService {
    createCharacter(character: Character): Promise<Character>;
    getAllCharacters(): Promise<Character[]>;
    getCharacterById(id: number): Promise<Character>;
}

export type Prisma = PrismaClient;