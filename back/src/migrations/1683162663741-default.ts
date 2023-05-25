import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683162663741 implements MigrationInterface {
    name = 'Default1683162663741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" RENAME COLUMN "nome" TO "name"`);
        await queryRunner.query(`ALTER TABLE "teams" RENAME CONSTRAINT "UQ_173d9ff9c179a586239de1f4c93" TO "UQ_48c0c32e6247a2de155baeaf980"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" RENAME CONSTRAINT "UQ_48c0c32e6247a2de155baeaf980" TO "UQ_173d9ff9c179a586239de1f4c93"`);
        await queryRunner.query(`ALTER TABLE "teams" RENAME COLUMN "name" TO "nome"`);
    }

}
