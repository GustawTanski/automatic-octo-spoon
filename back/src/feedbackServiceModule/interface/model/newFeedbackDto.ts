import * as jf from "joiful";

export default class NewFeedbackDto{
    @jf.string().required()
    targetId: string;

    @jf.string().required()
    title: string;

    @jf.string().required()
    content: string;

    tags: string[];

	constructor($targetId: string, $title: string, $content: string, $tags: string[]) {
        this.targetId = $targetId;
		this.title = $title;
        this.content = $content;
        this.tags = $tags;
    }
}