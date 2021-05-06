import type { NextApiRequest, NextApiResponse } from "next";

/**
 * GET /, returns all the endpoints available to the user
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "GET":
            res.status(200).json(["/api/characters"]);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};
