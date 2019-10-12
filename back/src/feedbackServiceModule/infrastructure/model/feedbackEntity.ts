import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class FeedbackEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column("text")
    content: string;

	constructor($id: number|undefined, $title: string, $content: string) {
		this.id = $id;
		this.title = $title;
		this.content = $content;
	}
}