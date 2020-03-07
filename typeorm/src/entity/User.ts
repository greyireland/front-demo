import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity({ name: "child" })
export class Child {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(type => Parent, p => p.child)
    parent: Parent
}

@Entity({ name: "parent" })
export class Parent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    age: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Child, child => child.parent)
    child: Child[];
}
