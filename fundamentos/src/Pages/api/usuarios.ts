import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { nome: "João", email: "joao@gmail.com" },
    { nome: "Maria", email: "maria@gmail.com" },
  ]);
}
