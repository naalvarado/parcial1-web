import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../../restaurant/restaurant.entity';
import { FranchiseEntity } from '../../franchise/franchise.entity';
import { BookingEntity } from '../../booking/booking.entity';
import { ImageEntity } from '../../image/image.entity';
import { MenuEntity } from '../../menu/menu.entity';
import { ProductEntity } from '../../product/product.entity';
import { ReviewEntity } from '../../review/review.entity';
import { ScheduleEntity } from '../../schedule/schedule.entity';
import { UserEntity } from '../../user/user.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [
      RestaurantEntity,
      FranchiseEntity,
      BookingEntity,
      ImageEntity,
      MenuEntity,
      ProductEntity,
      ReviewEntity,
      ScheduleEntity,
      UserEntity,
    ],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([
    RestaurantEntity,
    FranchiseEntity,
    BookingEntity,
    ImageEntity,
    MenuEntity,
    ProductEntity,
    ReviewEntity,
    ScheduleEntity,
    UserEntity,
  ]),
];
