import type { Request, Response } from "express";
import dbConnect from "lib/dbConnect";
import Machine from "models/Machine";

export default async function handler(req: Request, res: Response) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await Machine.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await Machine.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
