import Feedback from "./domain/Feedback";


export default interface FeedbackServicePort{
    saveFeedback(authorId: string, targetId: string): Promise<Feedback>;
    getFeedbackForUser(targetId: string): Promise<Feedback[]>;
    getFeedbackTagsForUSer(targetId: string): Promise<string[]>;
}