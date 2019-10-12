import Feedback from "./domain/Feedback";

export default interface FeedbackRepositoryPort{
    save(feedback: Feedback): Promise<Feedback>;
    selectByTargetId(targetId: string): Promise<Feedback[]>;
    selectTagsOnlyByTargetId(targetId: string): Promise<string[]>;
}