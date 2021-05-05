import type { NextApiRequest, NextApiResponse } from "next";

/**
 * GET /, returns all the endpoints available to the user
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    if (method !== "GET") {
        res.status(405).end(`Method ${method} Not Allowed`);
    } else {
        res.status(200).json({ name: "John Doe" });
    }
};
