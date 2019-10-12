import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Feedback from "../../core/domain/Feedback";

@Entity()
export default class Tag{
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    value: string;

    constructor($value:string){
        this.value = $value;
    }
}