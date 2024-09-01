import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import {connectDB} from './db/index.js'
const app = express();

app.use(express.json());

import productAllRoutes from './routes/index.routes.js'
app.use("/api/v1/products",productAllRoutes);

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 4000, () => {
    console.log(
      `Server is running on port :  http://localhost:${process.env.PORT}`
    );
  });
}).catch(()=>{
  console.log('Error connecting to database')
  process.exit(0)
})


app.get("/health", async (req, res) => {
  res.send({ meassage: "health is ok!" });
});
