import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1757081747774 implements MigrationInterface {
    name = 'Migration1757081747774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "description" character varying(800)`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "cover_image" character varying(800)`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(900) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "description"`);
    }

}
