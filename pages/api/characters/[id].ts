import type { NextApiRequest, NextApiResponse } from "next";
import { ICharacterService } from "../../../lib/backend/interfaces";
import container from "../../../lib/backend/inversify.config";
import TYPES from "../../../lib/backend/types";

const characterService = container.get<ICharacterService>(
    TYPES.CharacterService
);

/**
 * Handles various request methods to /characters/[id], which include:
 * <ul>
 *      <li>GET /characters/[id]: retrieves a character with the id specified</li>
 *      <li>PUT /characters/[id]: updates a character with the id specified</li>
 *      <li>DELETE /characters/[id]: deletes a character with the id specified</li>
 * </ul>
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        method,
        query: { id },
        body
    } = req;

    if (typeof id !== "string" || isNaN(parseInt(id))) {
        res.status(400).end("ID must be a valid integer");
        return;
    }

    switch (method) {
        case "GET":
            const character = await characterService.getCharacterById(+id);
            if (character) {
                res.status(200).json(character);
            } else {
                res.status(404).end(`No Character with ID ${id}`);
            }
            break;
        case "PUT":
            const updatedCharacter = await characterService.updateCharacterById(
                +id,
                body
            );
            if (updatedCharacter) {
                res.status(200).json(updatedCharacter);
            } else {
                res.status(404).end(`No Character with ID ${id}`);
            }
            break;
        case "DELETE":
            const deletedCharacter = await characterService.deleteCharacterById(
                +id
            );
            if (deletedCharacter) {
                res.status(200).end();
            } else {
                res.status(404).end(`No Character with ID ${id}`);
            }
            break;
        default:
            res.status(405).end(
                `Expected GET, PUT, or DELETE. Method ${method} Not Allowed`
            );
    }
};
