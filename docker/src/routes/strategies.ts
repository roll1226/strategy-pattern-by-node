import { Request, Response, Router } from "express";
import { Ticket } from "../Strategies/Ticket";
import { AdultTicketStrategy } from "../Strategies/Ticket/AdultTicketStrategy";
import { ChildTicketStrategy } from "../Strategies/Ticket/ChildTicketStrategy";
import { PairTicketStrategy } from "../Strategies/Ticket/PairTicketStrategy";
import { TICKET_TYPE } from "../enums/Ticket";

const router = Router();

const TicketStrategies: Record<TICKET_TYPE, Ticket> = [
  new Ticket(new AdultTicketStrategy()),
  new Ticket(new ChildTicketStrategy()),
  new Ticket(new PairTicketStrategy()),
];

router.get("/", async (req: Request, res: Response) => {
  res.json("Show Strategy Page");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id) as TICKET_TYPE;
  const ticket = TicketStrategies[id];
  const result = {
    price: ticket.getPrice(),
    userCount: ticket.getUserCount(),
    needChildChair: ticket.needChildChair(),
  };
  console.log(result);

  res.json(result);
});

export default router;
