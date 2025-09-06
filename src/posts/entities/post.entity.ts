import { User } from "../../users/entities/user.entity";
import { ManyToMany, JoinTable, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { Category } from './category.entity';

@Entity({ name: 'posts' })
export class Post {
     @PrimaryGeneratedColumn()
     id: number;

     @Column({ type: 'varchar', length: 255 })
     title: string;

     @Column({ type: 'text' })
     content: string;

     @Column({ type: 'varchar', length: 900, name: 'cover_image' })
     coverImage: string;

     @Column({ type: 'varchar', length: 255, name: 'summary' })
     summary: string;

     @Column({ type: 'boolean', default: false, name: 'is_draft' })
     isDraft: boolean;

     @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'create_at' })
     createdAt: Date;

     @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'update_at' })
     updateAt: Date;

     @ManyToOne(() => User, (user) => user.posts, { nullable: false })
     @JoinColumn({ name: 'user_id' })
     user: User;

     @ManyToMany(() => Category, (category) => category.posts)
     @JoinTable({
          name: 'posts_categories',
          joinColumn: { name: 'post_id', referencedColumnName: 'id' },
          inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
     })
     categories: Category[];
}