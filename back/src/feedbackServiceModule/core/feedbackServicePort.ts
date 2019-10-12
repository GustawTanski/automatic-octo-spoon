import Feedback from "./domain/Feedback";


export default interface FeedbackServicePort{
    saveFeedback(feedback: Feedback): Promise<Feedback>;
    getFeedbackForUser(targetId: string): Promise<Feedback[]>;
    getFeedbackTagsForUSer(targetId: string): Promise<string[]>;
}