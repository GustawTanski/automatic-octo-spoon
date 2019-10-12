import FeedbackServicePort from "../feedbackServicePort";
import FeedbackRepositoryPort from "../feedbackRepositoryPort";
import Feedback from "../domain/Feedback";

export default class FeedbackService implements FeedbackServicePort{
    private feedbackRepo: FeedbackRepositoryPort;

    constructor(feedbackRepositoryImplementation: FeedbackRepositoryPort){
        this.feedbackRepo = feedbackRepositoryImplementation;
    }

    saveFeedback(feedback: Feedback): Promise<Feedback> {
        return this.feedbackRepo.save(feedback);
    }
    
    getFeedbackForUser(targetId: string): Promise<Feedback[]> {
        return this.feedbackRepo.selectByTargetId(targetId);
    }

    getFeedbackTagsForUSer(targetId: string): Promise<string[]> {
        return this.feedbackRepo.selectTagsOnlyByTargetId(targetId);
    }

    
}