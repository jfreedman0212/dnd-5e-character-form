import type { NextApiRequest, NextApiResponse } from "next";
import { ICharacterService } from "../../../lib/backend/interfaces";
import container from "../../../lib/backend/inversify.config";
import TYPES from "../../../lib/backend/types";

const characterService = container.get<ICharacterService>(TYPES.CharacterService);

/**
 * Handles various request methods to /characters, which include:
 * <ul>
 *      <li>GET /characters: retrieves all characters</li>
 *      <li>POST /characters: which creates a new character</li>
 * </ul>
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            const characters = await characterService.getAllCharacters();
            res.status(200).json(characters);
            break;
        case "POST":
            try {
                const newCharacter = await characterService.createCharacter(req.body);
                res.status(200).json(newCharacter);
            } catch (e) {
                console.error(e);
                res.status(500).end("Could not create your character");
            }
            break;
        default:
            res.status(405).end(
                `Expected GET or POST. Method ${req.method} Not Allowed`
            );
    }
};
