import "reflect-metadata";
import TYPES from "./types";
import { ICharacterService, Prisma } from "./interfaces";
import { Character } from ".prisma/client";
import { helpers } from "inversify-vanillajs-helpers";

export default class CharacterService implements ICharacterService {
    private _prisma: Prisma;

    public constructor(prisma: Prisma) {
        this._prisma = prisma;
    }

    async createCharacter(character: Character): Promise<Character> {
        return await this._prisma.character.create({ data: character });
    }

    async getAllCharacters(): Promise<Character[]> {
        return await this._prisma.character.findMany();
    }
}

helpers.annotate(CharacterService, [TYPES.Prisma]);
