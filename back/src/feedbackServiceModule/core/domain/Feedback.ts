import 'reflect-metadata';
import * as jf from "joiful";
import { mapping, map } from 'auto-mapping';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany, RelationId} from "typeorm";
import Tag from '../../infrastructure/model/Tag';

@Entity()
export default class Feedback {
    @PrimaryGeneratedColumn()
    @mapping()
    @jf.number()
    id?: number;

    @Column()
    @mapping()
    @jf.string().required()
    targetId: string;

    @Column()
    @mapping()
    @jf.string().required()
    title: string;

    @Column("text")
    @mapping()
    @jf.string().required()
    content: string;

    @Column("simple-array")
    @mapping()
    @jf.array()
    tags: string[];

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

	constructor($id: number|undefined, $targetId: string, $title: string, $content: string, $tags: string[]) {
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
            if(error){throw new TypeError(error.message)};
            throw new TypeError("Mapping error");
        }
        else return feedback;
    }
}