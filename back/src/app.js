import express, { Application } from "express";
import RestInterface from "./feedbackServiceModule/interface/restInterface";
import {createConnection} from "typeorm";
import { FeedbackEntity } from "./feedbackServiceModule/infrastructure/model/feedbackEntity";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const MYSQL_CONNECTION_CONFIG = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "feeder",
    password: "backer",
    database: "feedback_test",
    entities: [
        FeedbackEntity
    ],
    synchronize: true,
}

const feedbackApi = new RestInterface();
app.use("/", feedbackApi.router);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

createConnection( MYSQL_CONNECTION_CONFIG ).then().catch(error => console.log(error));