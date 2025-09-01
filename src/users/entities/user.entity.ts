import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'users' })
export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column({ type: 'varchar', length: 100 })
     name: string;

     @Column({ type: 'varchar', length: 100, unique: true })
     password: string;

     @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'create_at' })
     createdAt: Date;

     @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'update_at' })
     updateAt: Date;

     //setting foreign keys
     @OneToOne(()=>Profile, {nullable:false, cascade:true})
     @JoinColumn({name:'profile_id'})
     profile:Profile;
}