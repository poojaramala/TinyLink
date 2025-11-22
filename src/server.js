// // import express from "express";
// // import pool from "./db/index.js";

// // const app = express();
// // app.use(express.json());

// // app.get("/healthz", async (req, res) => {
// //   try {
// //     const result = await pool.query("SELECT NOW()");
// //     res.json({ ok: true, time: result.rows[0].now });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ ok: false });
// //   }
// // });

// // app.listen(3000, () => console.log("Server running on port 3000"));

// import express from "express";
// import dotenv from "dotenv";
// import router from "./routes/linkRoutes.js";
// import pool from "./db/index.js";
// import cors from "cors";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/healthz", async (req, res) => {
//   const time = await pool.query("SELECT NOW()");
//   res.json({ ok: true, version: "1.0", time: time.rows[0].now });
// });

// app.use("/", router);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/linkRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/healthz", (req, res) => {
  res.json({ ok: true });
});

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
