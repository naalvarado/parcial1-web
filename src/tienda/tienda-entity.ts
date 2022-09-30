import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm';
import { CafeEntity } from '../cafe/cafe-entity';

@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    dirección: string;

    @Column()
    teléfono: string;

    @ManyToMany(() => CafeEntity)
    @JoinTable()
    cafes: CafeEntity[];
}
