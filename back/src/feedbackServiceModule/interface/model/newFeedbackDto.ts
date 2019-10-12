import * as jf from "joiful";

export default class NewFeedbackDto{
    @jf.string().required()
    targetId: string;

    @jf.string().required()
    title: string;

    @jf.string().required()
    content: string;

    @jf.array()
    tags: string[];

    @jf.boolean().required()
    isPrivate: boolean;

    @jf.number().min(0).max(5)
    stars?: number;

    @jf.number().min(0).max(2)
    anonymityLevel?: number;

    @jf.string()
    authorId?: string;

	constructor($targetId: string, $title: string, $content: string, $tags: string[], $isPrivate: boolean, $stars?: number, $anonymityLevel?: number, $authorId?: string) {
        this.targetId = $targetId;
		this.title = $title;
        this.content = $content;
        this.tags = $tags;
        this.isPrivate = $isPrivate;
        this.stars = $stars;
        this.anonymityLevel = $anonymityLevel;
        this.authorId = $authorId;
    }
}