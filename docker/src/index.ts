import billRouter from "@/routes/bills";
import strategyRouter from "@/routes/strategies";
import userRouter from "@/routes/users";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/strategies", strategyRouter);
app.use("/bills", billRouter);

app.use("/", (req, res) => {
  res.json("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
