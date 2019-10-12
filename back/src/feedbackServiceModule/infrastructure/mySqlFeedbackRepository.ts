import FeedbackRepositoryPort from "../core/feedbackRepositoryPort";
import { Repository, getRepository } from "typeorm";
import { FeedbackEntity } from "./model/feedbackEntity";
import Feedback from "../core/domain/Feedback";

export default class MySqlFeedbackRepository implements FeedbackRepositoryPort{
    private repository: Repository<FeedbackEntity>;

    constructor(){
        this.repository = getRepository(FeedbackEntity);
    }

    async save(feedback: Feedback): Promise<Feedback> {
        throw new Error("Method not implemented.");
    }

    async selectByTargetId(targetId: string): Promise<Feedback[]> {
        throw new Error("Method not implemented.");
    }

    async selectTagsOnlyByTargetId(targetId: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}