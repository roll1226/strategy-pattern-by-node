export const TICKET_TYPE = {
  ADULT: 0,
  CHILD: 1,
  PAIR: 2,
} as const;

export type TicketType = (typeof TICKET_TYPE)[keyof typeof TICKET_TYPE];
