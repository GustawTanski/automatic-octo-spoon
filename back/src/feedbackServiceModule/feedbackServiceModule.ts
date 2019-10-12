import RestInterface from "./interface/restInterface";
import MySqlFeedbackRepository from "./infrastructure/mySqlFeedbackRepository";
import FeedbackService from "./core/service/feedbackService";
import Feedback from "./core/domain/Feedback";
import {createConnection} from "typeorm";
import Tag from "./infrastructure/model/Tag";
import { FeedbackEntity } from "./infrastructure/model/feedbackEntity";

const feedbackServiceModule = {
    //FeedbackRepositoryImplementation: MySqlFeedbackRepository,
    //FeedbackServiceImplementation: FeedbackS,

    init: async function() {
        //let repository = new this.NoteRepositoryImplementation();
        //let service = new this.NoteServiceImplementation(repository);
        const MYSQL_CONNECTION_CONFIG = {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "feeder",
            password: "backer",
            database: "feedback_test",
            entities: [
                Feedback
            ],
            synchronize: true,
        }
        await createConnection( MYSQL_CONNECTION_CONFIG ).then().catch(error => console.log(error));

        const repository = new MySqlFeedbackRepository();
        const service = new FeedbackService(repository);
        const restInterface = new RestInterface(service);

        return restInterface;
    }
}

export default feedbackServiceModule;