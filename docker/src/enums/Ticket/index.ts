export const TICKET_TYPE = {
  ADULT: 0,
  CHILD: 1,
  PAIR: 2,
} as const;

export type TICKET_TYPE_KEY = keyof typeof TICKET_TYPE;
export type TICKET_TYPE = (typeof TICKET_TYPE)[TICKET_TYPE_KEY];
