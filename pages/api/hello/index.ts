// pages/api/hello/index.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "GET") {
      res.status(200).json({ message: "Hello World!" });
   }
   //
   else if (req.method === "POST") {
      // Assurez-vous que le corps de la requête contient le champ 'name'
      if (!req.body.name) {
         res.status(400).json({ error: "Please provide a name" });
         return;
      }

      const name = req.body.name;
      res.status(200).json({ message: `Hello ${name}` });
   }
   //
   else {
      // Si une autre méthode est utilisée, renvoyer 405 Method Not Allowed
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   }
}
