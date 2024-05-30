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

type RenderBillDomType<T> = (bills: [T, ...T[]]) => string;

const router = Router();

const BillStrategies: Record<BILL_TYPE, Bill> = [
  new Bill(new OldTenThousandYenStrategy()),
  new Bill(new OldFiveThousandYenStrategy()),
  new Bill(new OldThousandYenStrategy()),
  new Bill(new NewTenThousandYenStrategy()),
  new Bill(new NewFiveThousandYenStrategy()),
  new Bill(new NewThousandYenStrategy()),
];

const renderBillDom: RenderBillDomType<Bill> = (bills) => {
  return bills
    .map((bill) => {
      return `
        <h1>${bill.getName()}</h1>
        <h2>${bill.getBehind()}</h2>
        <p>${bill.getPrice().toLocaleString()}円</p>
        <p>${bill.isNew() ? "新" : "旧"}お札</p>
      `;
    })
    .join();
};

router.get("/", (req, res) => {
  res.json("Show bills Page");
});

router.get("/new", (req, res) => {
  const tenThousandYen = BillStrategies[BILL_TYPE.NEW_TEN_THOUSAND_YEN];
  const fiveThousandYen = BillStrategies[BILL_TYPE.NEW_FIVE_THOUSAND_YEN];
  const thousandYen = BillStrategies[BILL_TYPE.NEW_THOUSAND_YEN];

  const dom = renderBillDom([tenThousandYen, fiveThousandYen, thousandYen]);
  res.send(dom);
});

router.get("/old", (req, res) => {
  const tenThousandYen = BillStrategies[BILL_TYPE.OLD_TEN_THOUSAND_YEN];
  const fiveThousandYen = BillStrategies[BILL_TYPE.OLD_FIVE_THOUSAND_YEN];
  const thousandYen = BillStrategies[BILL_TYPE.OLD_THOUSAND_YEN];

  const dom = renderBillDom([tenThousandYen, fiveThousandYen, thousandYen]);
  res.send(dom);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id) as BILL_TYPE;
  const bill = BillStrategies[id];

  const dom = renderBillDom([bill]);
  res.send(dom);
});

export default router;
