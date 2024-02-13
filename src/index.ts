import { Ticket } from "./Strategy/Ticket/index";
import { AdultTicketStrategy } from "./Strategy/Ticket/AdultTicketStrategy";
import { ChildTicketStrategy } from "./Strategy/Ticket/ChildTicketStrategy";
import { PairTicketStrategy } from "./Strategy/Ticket/PairTicketStrategy";

const TicketStrategies = [
  new Ticket(new AdultTicketStrategy()),
  new Ticket(new ChildTicketStrategy()),
  new Ticket(new PairTicketStrategy()),
];
console.log(TicketStrategies[0].getPrice());
