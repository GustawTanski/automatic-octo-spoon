import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { mapping } from "auto-mapping";

@Entity({name: "Fedback"})
export class FeedbackEntity {
    /*@PrimaryGeneratedColumn()
    @mapping()
    id?: number;

    @Column()
    @mapping()
    targetId: string;

    @Column()
    @mapping()
    title: string;

    @Column("text")
    @mapping()
    content: string;

    @mapping()
    tags: Tag[];*/

    /*@ManyToMany(type => Tag)
    @JoinTable(name: "question_categories",
    joinColumn: {
        name: "question",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "category",
        referencedColumnName: "id")
    tags: Tag[];*/

	/*constructor($id: number|undefined, $targetId: string, $title: string, $content: string, $tags: string[]) {
        this.id = $id;
        this.targetId = $targetId;
		this.title = $title;
        this.content = $content;
        this.tags = $tags;
    }

    static fromObject(source: any): Feedback {
        let feedback = map(source, Feedback);
        const { error } = jf.validateAsClass(feedback, Feedback);
        if (feedback == null || error){
            throw new TypeError("Failed mapping");
        }
        else return feedback;
    }*/
}