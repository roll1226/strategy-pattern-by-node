import { Request, Response, Router } from "express";
import { Ticket } from "../Strategies/Ticket";
import { AdultTicketStrategy } from "../Strategies/Ticket/AdultTicketStrategy";
import { ChildTicketStrategy } from "../Strategies/Ticket/ChildTicketStrategy";
import { PairTicketStrategy } from "../Strategies/Ticket/PairTicketStrategy";

const router = Router();

const TicketStrategies = [
  new Ticket(new AdultTicketStrategy()),
  new Ticket(new ChildTicketStrategy()),
  new Ticket(new PairTicketStrategy()),
];

router.get("/", async (req: Request, res: Response) => {
  res.json("Show Strategy Page");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const ticket = TicketStrategies[id];
  res.json(ticket);
});

export default router;
