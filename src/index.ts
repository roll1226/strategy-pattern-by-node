import { Ticket } from "./Strategies/Ticket/index";
import { AdultTicketStrategy } from "./Strategies/Ticket/AdultTicketStrategy";
import { ChildTicketStrategy } from "./Strategies/Ticket/ChildTicketStrategy";
import { PairTicketStrategy } from "./Strategies/Ticket/PairTicketStrategy";

const TicketStrategies = [
  new Ticket(new AdultTicketStrategy()),
  new Ticket(new ChildTicketStrategy()),
  new Ticket(new PairTicketStrategy()),
];

const TicketIndex = Number(process.argv[2]);
const TicketStrategy = TicketStrategies[TicketIndex];
console.log(`getPrice: ${TicketStrategy.getPrice()}`);
console.log(`getUserCount: ${TicketStrategy.getUserCount()}`);
console.log(
  `isAvailableChildAttraction: ${TicketStrategy.isAvailableChildAttraction()}`
);
