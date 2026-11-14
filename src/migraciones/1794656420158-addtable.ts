import type { MigrationInterface, QueryRunner } from "typeorm";


export class Addtable1794656420158 implements MigrationInterface {
    name = 'Addtable1794656420158'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`estudiante\` (\`id\` int NOT NULL AUTO_INCREMENT, \`dni\` varchar(8) NOT NULL, \`nombre\` varchar(100) NOT NULL, \`apellido_paterno\` varchar(100) NOT NULL, \`apellido_materno\` varchar(100) NOT NULL, \`grado\` varchar(50) NOT NULL, \`seccion\` varchar(10) NOT NULL, \`voto\` int NOT NULL DEFAULT '0', UNIQUE INDEX \`IDX_15606045734a12d439980cde2e\` (\`dni\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    } 


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_15606045734a12d439980cde2e\` ON \`estudiante\``);
        await queryRunner.query(`DROP TABLE \`estudiante\``);
    }

}
