
export default class Feedback {
    id?: number;
    title: string;
    content: string;

	constructor($id: number|undefined, $title: string, $content: string) {
		this.id = $id;
		this.title = $title;
		this.content = $content;
    }
}