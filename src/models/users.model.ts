import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({primaryKey: true})
  userId: number;

  @Column({
    unique: true,

  })
  userName: string;

  @Column
  age: number;

  @Column({ defaultValue: 0 })
  score: number;

  @Column
  pass: string;
}