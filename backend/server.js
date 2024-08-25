import express from "express";
import dotennv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import {connectToDB} from "./db/connectToMondoDB.js"; 


const PORT = process.env.PORT || 5000;
const app = express();


dotennv.config()

//app.get("/", (req, res) => { res.send("Hello Pagal") });

app.use(parse.json());
app.use("/api/auth",authRoutes);

app.listen(PORT, ()  => {
    connectToDB();
  console.log(`Server running on port ${PORT}`);
});