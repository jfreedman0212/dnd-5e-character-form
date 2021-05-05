import type { NextApiRequest, NextApiResponse } from "next";
import { ICharacterService } from "../../../lib/backend/interfaces";
import container from "../../../lib/backend/inversify.config";
import TYPES from "../../../lib/backend/types";

const characterService = container.get<ICharacterService>(
    TYPES.CharacterService
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    if (typeof id !== "string" || isNaN(parseInt(id))) {
        res.status(400).end("ID must be a valid integer");
        return;
    }
    const character = await characterService.getCharacterById(parseInt(id));
    if (!character) {
        res.status(404).end(`No Character with ID ${id}`);
        return;
    }
    res.status(200).json(character);
};
