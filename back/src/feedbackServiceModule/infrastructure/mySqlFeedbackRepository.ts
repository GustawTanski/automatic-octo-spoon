import FeedbackRepositoryPort from "../core/feedbackRepositoryPort";
import { Repository, getRepository } from "typeorm";
import Feedback from "../core/domain/Feedback";

export default class MySqlFeedbackRepository implements FeedbackRepositoryPort{
    private repository: Repository<Feedback>;
    //private tagRepository: Repository<Tag>;

    constructor(){
        this.repository = getRepository(Feedback);
        //this.tagRepository = getRepository(Tag);
    }

    async save(feedback: Feedback): Promise<Feedback> {
        let saved = await this.repository.save(feedback);
        return saved;
    }

    async selectByTargetId(targetId: string): Promise<Feedback[]> {
        let feedbacks = await this.repository.find({targetId: targetId});
        return feedbacks;
    }

    async selectTagsOnlyByTargetId(targetId: string): Promise<string[]> {
        let feedbacks = await this.repository.find({targetId: targetId});
        let listOfTagArrays = feedbacks.map(item => item.tags);
        let jointArray: string[] = [];

        listOfTagArrays.forEach(array => {
            jointArray = [...jointArray, ...array]
        });

        let tags = jointArray.filter((item,index) => jointArray.indexOf(item) === index)

        /*let jointTagsArray = 
        let tags = jointTagsArray.filter((item,index) => jointTagsArray.indexOf(item) === index)*/
        return tags;
    }
}