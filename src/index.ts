import { Ticket } from "./Strategies/Ticket";
import { AdultTicketStrategy } from "./Strategies/Ticket/AdultTicketStrategy";
import { ChildTicketStrategy } from "./Strategies/Ticket/ChildTicketStrategy";
import { PairTicketStrategy } from "./Strategies/Ticket/PairTicketStrategy";

const TicketStrategies = [
  new Ticket(new AdultTicketStrategy("成人")),
  new Ticket(new ChildTicketStrategy("子ども")),
  new Ticket(new PairTicketStrategy("ペア")),
];

const TicketIndex = Number(process.argv[2]);
const TicketStrategy = TicketStrategies[TicketIndex];
console.log(`getPrice: ${TicketStrategy.getPrice()}`);
console.log(`getUserCount: ${TicketStrategy.getUserCount()}`);
console.log(`needChildChair: ${TicketStrategy.needChildChair()}`);
console.log(`name: ${TicketStrategy.getName()}`);
