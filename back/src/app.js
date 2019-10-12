import express, { Application } from "express";
import feedbackServiceModule from "./feedbackServiceModule/feedbackServiceModule";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

startServices();

async function startServices(){
    const feedbackApi = await feedbackServiceModule.init();
    app.use("/", feedbackApi.router);
    console.log("...");
    
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}