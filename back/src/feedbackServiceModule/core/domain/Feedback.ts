import 'reflect-metadata';
import * as jf from "joiful";
import { mapping, map } from 'auto-mapping';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany, RelationId} from "typeorm";

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

    @Column()
    @mapping()
    @jf.boolean().required()
    isPrivate: boolean;

    @Column()
    @mapping()
    @jf.number().min(0).max(5)
    stars?: number;

    @Column()
    @mapping()
    @jf.number().min(0).max(2)
    anonymityLevel?: number;

    @Column()
    @mapping()
    @jf.string()
    authorId?: string;

	constructor($id: number|undefined, $targetId: string, $title: string, $content: string, $tags: string[], $isPrivate: boolean, $stars?: number, $anonymityLevel?: number, $authorId?: string) {
        this.id = $id;
        this.targetId = $targetId;
		this.title = $title;
        this.content = $content;
        this.tags = $tags;
        this.isPrivate = $isPrivate;
        this.stars = $stars;
        this.anonymityLevel = $anonymityLevel;
        this.authorId = $authorId;
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