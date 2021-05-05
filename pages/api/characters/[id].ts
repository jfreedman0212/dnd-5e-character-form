import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  res.status(200).json({ name: 'John Doe' })
}
