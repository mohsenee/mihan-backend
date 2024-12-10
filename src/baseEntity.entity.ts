import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

// export class baseEntity {
//     @ApiProperty()
//     @ObjectIdColumn()
//     id: any;
//     @Column()
//     @ApiProperty()
//     createdAt: Date;
//     @ApiProperty()
//     @UpdateDateColumn({ nullable: true })
//     updateAt: Date;
// }

export class baseEntity {
    @ObjectIdColumn()
    id: any;
  
    @CreateDateColumn() // Automatically sets the creation date
    createdAt: Date;
  
    @UpdateDateColumn({ nullable: true }) // Automatically updates the timestamp
    updateAt: Date;
  
    @BeforeInsert()
    setCreationDate() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    setUpdateDate() {
      this.updateAt = new Date();
    }
}
export class baseResultEntity {
    @ApiProperty()
    Message: string;
    @ApiProperty()
    Status: boolean;
}
