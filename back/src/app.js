import express, { Application } from "express";
import RestInterface from "./feedbackServiceModule/interface/restInterface";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const feedbackApi = new RestInterface();
app.use("/", feedbackApi.router);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});