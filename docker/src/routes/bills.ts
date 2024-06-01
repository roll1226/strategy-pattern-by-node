import {
  Bill,
  NewFiveThousandYenStrategy,
  NewTenThousandYenStrategy,
  NewThousandYenStrategy,
  OldFiveThousandYenStrategy,
  OldTenThousandYenStrategy,
  OldThousandYenStrategy,
} from "@/Strategies/Bill";
import { BILL_TYPE } from "@/enums/Bill";
import { Router } from "express";

type CreateBillsDomType<T> = (bills: [T, ...T[]]) => string;

const router = Router();

const BillStrategies: Record<BILL_TYPE, Bill> = {
  [BILL_TYPE.OLD_TEN_THOUSAND_YEN]: new Bill(new OldTenThousandYenStrategy()),
  [BILL_TYPE.OLD_FIVE_THOUSAND_YEN]: new Bill(new OldFiveThousandYenStrategy()),
  [BILL_TYPE.OLD_THOUSAND_YEN]: new Bill(new OldThousandYenStrategy()),
  [BILL_TYPE.NEW_TEN_THOUSAND_YEN]: new Bill(new NewTenThousandYenStrategy()),
  [BILL_TYPE.NEW_FIVE_THOUSAND_YEN]: new Bill(new NewFiveThousandYenStrategy()),
  [BILL_TYPE.NEW_THOUSAND_YEN]: new Bill(new NewThousandYenStrategy()),
};

const createBillsDom: CreateBillsDomType<Bill> = (bills) => {
  return bills
    .map((bill) => {
      return `
        <div>
          <h1 style="margin: 0;">${bill.getName()}</h1>
          <h2 style="margin: 0;">裏面：${bill.getBehind()}</h2>
          <p style="margin: 0;">${bill.getPrice().toLocaleString()}円</p>
          <p style="margin: 0;">${bill.isNew() ? "新" : "旧"}お札</p>
        </div>
      `;
    })
    .join("----------------------------");
};

router.get("/", (req, res) => {
  res.send("Hello bills");
});

router.get("/new", (req, res) => {
  const tenThousandYen = BillStrategies[BILL_TYPE.NEW_TEN_THOUSAND_YEN];
  const fiveThousandYen = BillStrategies[BILL_TYPE.NEW_FIVE_THOUSAND_YEN];
  const thousandYen = BillStrategies[BILL_TYPE.NEW_THOUSAND_YEN];

  const dom = createBillsDom([tenThousandYen, fiveThousandYen, thousandYen]);
  res.send(dom);
});

router.get("/old", (req, res) => {
  const tenThousandYen = BillStrategies[BILL_TYPE.OLD_TEN_THOUSAND_YEN];
  const fiveThousandYen = BillStrategies[BILL_TYPE.OLD_FIVE_THOUSAND_YEN];
  const thousandYen = BillStrategies[BILL_TYPE.OLD_THOUSAND_YEN];

  const dom = createBillsDom([tenThousandYen, fiveThousandYen, thousandYen]);
  res.send(dom);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id) as BILL_TYPE;

  if (!Object.values(BILL_TYPE).includes(id))
    return res.status(400).send("Invalid BILL_TYPE id");

  const bill = BillStrategies[id];

  const dom = createBillsDom([bill]);
  res.send(dom);
});

export default router;
